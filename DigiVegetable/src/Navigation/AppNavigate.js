import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../Screen/UnBodingScreen/FirstScreen';
import SignInFirstScreen from '../Screen/SigninScreen/SignInFirstScreen';
import SignInForgetPassOTP from '../Screen/SigninScreen/SignInForgetPassOTP';
import SignInForgotPassscreen from '../Screen/SigninScreen/SignInForgotPassscreen';
import SignInNewPassScreen from '../Screen/SigninScreen/SignInNewPassScreen';
import SignInPassChangedScreen from '../Screen/SigninScreen/SignInPassChangedScreen';
import SignUpFirstScreen from '../Screen/SignUpScreen/SignUpFirstScreen';
import SignUpProfileScreen from '../Screen/SignUpScreen/SignUpProfileScreen';
import SignUpOTPScreen from '../Screen/SignUpScreen/SignUpOTPScreen';
import SignUpLastScreen from '../Screen/SignUpScreen/SignUpLastScreen.jsx';
import BasketChekout from '../Screen/Component/Basket/BasketChekout';
import TabNavigation from './TabNavigation';
import BasketShippindAddressScreen from '../Screen/Component/Basket/BasketShippindAddressScreen';
import BasketPaymentScreen from '../Screen/Component/Basket/BasketPaymentScreen.jsx';
import BasketViewOrderScreen from '../Screen/Component/Basket/BasketViewOrderScreen.jsx';
import categoryDetailsScreen from '../Screen/Component/Category/categoryDetailsScreen.jsx';
import EditProfile from '../Screen/Component/Profile/EditProfile.jsx';
import AddressProfile from '../Screen/Component/Profile/AddressProfile.jsx';
import NewAddressAddScreen from '../Screen/Component/AllPage/NewAddressAddScreen.jsx';
import NotificationProfileScreen from '../Screen/Component/Profile/NotificationProfileScreen.jsx';
import WatchListScreen from '../Screen/Component/Category/WatchListScreen.jsx';
import MostPopularScreen from '../Screen/Component/Category/MostPopularScreen.jsx';
import SearchItemScreen from '../Screen/Component/Category/SearchItemScreen.jsx';
import ShortFilterScreen from '../Screen/Component/Category/ShortFilterScreen.jsx';
import CategoriesFilterScreen from '../Screen/Component/Category/CategoriesFilterScreen.jsx';
import CategoryReviewScreen from '../Screen/Component/Category/CategoryReviewScreen.jsx';
import PrivacyPolicyScreen from '../Screen/Component/Profile/PrivacyPolicyScreen.jsx';
import TrackOrderScreen from '../Screen/Component/MyOrder/TrackOrderScreen.jsx';
import SecondScreen from '../Screen/UnBodingScreen/SecondScreen.jsx';

const Stack = createNativeStackNavigator();


const AppNavigate = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='FirstScreen'>
            <Stack.Screen name='TabNavigation' component={TabNavigation} />
            <Stack.Screen name='FirstScreen' component={FirstScreen} />
            <Stack.Screen name='SecondScreen' component={SecondScreen} />
            <Stack.Screen name='NewAddressAddScreen' component={NewAddressAddScreen} />

            {/* SignIn Screen */}
            <Stack.Screen name='SignInFirstScreen' component={SignInFirstScreen} />
            <Stack.Screen name='SignInForgotPassscreen' component={SignInForgotPassscreen} />
            <Stack.Screen name='SignInForgetPassOTP' component={SignInForgetPassOTP} />
            <Stack.Screen name='SignInNewPassScreen' component={SignInNewPassScreen} />
            <Stack.Screen name='SignInPassChangedScreen' component={SignInPassChangedScreen} />

            {/* SignUp Screen */}
            <Stack.Screen name='SignUpFirstScreen' component={SignUpFirstScreen} />
            <Stack.Screen name='SignUpProfileScreen' component={SignUpProfileScreen} />
            <Stack.Screen name='SignUpOTPScreen' component={SignUpOTPScreen} />
            <Stack.Screen name='SignUpLastScreen' component={SignUpLastScreen} />

            {/* basket Scrren Recode */}
            <Stack.Screen name='BasketChekout' component={BasketChekout} />
            <Stack.Screen name='BasketShippindAddressScreen' component={BasketShippindAddressScreen} />
            <Stack.Screen name='BasketPaymentScreen' component={BasketPaymentScreen} />
            <Stack.Screen name='BasketViewOrderScreen' component={BasketViewOrderScreen} />

            {/* Category Screen Recode */}
            <Stack.Screen name='categoryDetailsScreen' component={categoryDetailsScreen} />
            <Stack.Screen name='WatchListScreen' component={WatchListScreen} />
            <Stack.Screen name='MostPopularScreen' component={MostPopularScreen} />
            <Stack.Screen name='SearchItemScreen' component={SearchItemScreen} />
            <Stack.Screen name='ShortFilterScreen' component={ShortFilterScreen} />
            <Stack.Screen name='CategoriesFilterScreen' component={CategoriesFilterScreen} />
            <Stack.Screen name='CategoryReviewScreen' component={CategoryReviewScreen} />

            {/* My Order Screen Recode */}
            <Stack.Screen name='TrackOrderScreen' component={TrackOrderScreen} />

            {/* Profile recode */}
            <Stack.Screen name='EditProfile' component={EditProfile} />
            <Stack.Screen name='AddressProfile' component={AddressProfile} />
            <Stack.Screen name='NotificationProfileScreen' component={NotificationProfileScreen} />
            <Stack.Screen name='PrivacyPolicyScreen' component={PrivacyPolicyScreen} />


        </Stack.Navigator>

    )
}

export default AppNavigate


