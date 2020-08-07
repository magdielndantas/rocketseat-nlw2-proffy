import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8257e5",
        justifyContent: 'center',
        padding: 40,
        borderTopWidth: 0
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: "Poppins_400Regular",
        color: "#FFFFFF",
        fontSize: 20,
        lineHeight: 30,
        marginTop: 22,
    },

    titleBold: {
        fontFamily: "Poppins_600SemiBold",
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 14,
        justifyContent: 'space-between'
    },

    button: {
        height: 100,
        width: '48%',
        borderRadius: 8,
        padding: 14,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },

    buttonSecondary: {
        backgroundColor: '#04d351'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 18
    }

})

export default styles