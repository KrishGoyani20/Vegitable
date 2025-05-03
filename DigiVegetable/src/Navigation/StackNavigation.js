import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNavigation from './TabNavigation'

const StackNavigation = () => {
  return (
     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='FirebaseDataFatchDemoScreen'>
           <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name='FirstScreen' component={FirstScreen} />
            <Stack.Screen name='SignInFirstScreen' component={SignInFirstScreen} />
            <Stack.Screen name='SignInForgotPassscreen' component={SignInForgotPassscreen} />
            <Stack.Screen name='SignInForgetPassOTP' component={SignInForgetPassOTP} />
            <Stack.Screen name='SignInNewPassScreen' component={SignInNewPassScreen} />
            <Stack.Screen name='SignInPassChangedScreen' component={SignInPassChangedScreen} />

            <Stack.Screen name='SignUpFirstScreen' component={SignUpFirstScreen} />
            <Stack.Screen name='SignUpProfileScreen' component={SignUpProfileScreen} />
            <Stack.Screen name='SignUpOTPScreen' component={SignUpOTPScreen} />
            <Stack.Screen name='SignUpPassChangedScreen' component={SignUpPassChangedScreen} />

            <Stack.Screen name='BasketChekout' component={BasketChekout} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='FirebaseDataFatchDemoScreen' component={FirebaseDataFatchDemoScreen} />
        </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})