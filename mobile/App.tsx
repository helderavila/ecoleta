import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { StatusBar } from 'react-native'
import { Roboto_400Regular, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'


import Routes from './src/routes'

const App = () => {
  // const [fontsLoaded] = useFonts({
  //   Roboto_400Regular,
  //   Roboto_500Medium,
  //   Ubuntu_700Bold
  // })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto_400Regular,
        Roboto_500Medium,
        Ubuntu_700Bold
      })

      setLoading(false)
    }

    loadFonts()
  }, [])

  if (loading) return <AppLoading />

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}

export default App