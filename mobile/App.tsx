import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppStack from './src/routes/AppStack'
import { AppLoading } from 'expo'

import { useFonts, Archivo_400Regular, Archivo_600SemiBold, Archivo_700Bold } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'


export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Archivo_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="auto" />
      </>
    );
  }
}