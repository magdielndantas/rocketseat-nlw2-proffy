import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'
import heartOutlineIncon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'
import api from '../../services/api'

export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher,
    favorite: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorite }) => {
    const [isFavorite, setIsFavorite] = useState(favorite)


    function handleLinkToWhatsapp() {
        api.post('connections', {
            user_id: teacher.id
        })
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite() {

        const favorites = await AsyncStorage.getItem('favorites')

        let favoritesArray = []

        if (favorites) {
            favoritesArray = JSON.parse(favorites)
        }
        if (isFavorite) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id
            })

            setIsFavorite(false)
            favoritesArray.splice(favoriteIndex, 1)
        } else {

            favoritesArray.push(teacher)
            setIsFavorite(true)
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>

                <Text style={styles.bio} >
                    {teacher.bio}
                </Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>{teacher.cost}</Text>
                    <View style={styles.buttonsContainer}>
                        <RectButton style={[
                            styles.favoriteButton,
                            isFavorite ? styles.favorite : {}]
                        }
                            onPress={handleToggleFavorite}

                        >
                            {isFavorite
                                ? <Image source={unFavoriteIcon} />
                                : <Image source={heartOutlineIncon} />

                            }


                        </RectButton>
                        <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
                            <Image source={whatsappIcon} />
                            <Text style={styles.contactButtonText}>
                                Entrar em contato
                            </Text>
                        </RectButton>
                    </View>
                </Text>
            </View>
        </View>
    )
}

export default TeacherItem