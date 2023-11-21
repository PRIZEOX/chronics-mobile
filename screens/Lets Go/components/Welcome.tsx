import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import { GreetingScreenNavigationProp } from '../../../types.nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font/build/FontHooks'
export const Welcome = () => {
  const [fontsLoaded, error] = useFonts({
    Cormorant: require('../../../assets/fonts/CormorantUnicase-Bold.ttf'),
    Jost: require('../../../assets/fonts/Jost-Light.ttf'),
    'Jost-Light': require('../../../assets/fonts/Jost-Medium.ttf'),
  })

  const navigation = useNavigation<GreetingScreenNavigationProp>()
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.tittle}>Добро пожаловать!</Text>
      </View>
      <View style={styles.Image}>
        <Image
          style={styles.Image}
          source={require('../../../assets/public/image 44.png')}
        />
      </View>
      <View style={styles.describe}>
        <Text style={styles.textDescribe}>
          Ум приветсвует вас в начале вашего приключения в Хрониках Разбитого
          Мира
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Greeting', { screen: 'Information' })
        }>
        <View style={styles.Button}>
          <Text style={styles.buttonText}>Поехали!</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: 25,
    marginTop: 50,
    backgroundColor: '#E9E2B6',
    flex: 1,
  },
  textContainer: {
    marginTop: 50,
  },
  Image: {
    height: 300,
    width: 200,
  },
  Button: {
    marginTop: 80,
    borderRadius: 14,
    width: 150,
    height: 70,
    backgroundColor: '#FF8800',
    padding: 12,
  },
  describe: {
    width: 300,
  },
  buttonText: {
    paddingTop: 1,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Jost-Light',
  },
  textDescribe: {
    fontSize: 21,
    fontFamily: 'Cormorant',
    textAlign: 'center',
    lineHeight: 32,
  },
  tittle: {
    fontFamily: 'Cormorant',
    fontSize: 33,
    textAlign: 'center',
  },
})