import { StyleSheet, View, AsyncStorage } from 'react-native'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Screen/TabScreen/HomeScreen'
import SignInFirstScreen from '../Screen/SigninScreen/SignInFirstScreen'

const Stack = createStackNavigator()

const SplashScreen = () => {
  useEffect(() => {
    const checkUserLogin = async () => {
      const user = await AsyncStorage.getItem('user')
      if (user) {
        navigation.navigate('HomeScreen')
      } else {
        navigation.navigate('SignInFirstScreen')
      }
    }
    checkUserLogin()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignInFirstScreen" component={SignInFirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})
