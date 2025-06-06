import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/TabScreen/HomeScreen';
import ProfileScreen from '../Screen/TabScreen/ProfileScreen';
import OrderScreen from '../Screen/TabScreen/OrderScreen';
import BasketScreen from '../Screen/TabScreen/BasketScreen';
import CategoryScreen from '../Screen/TabScreen/CategoryScreen';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useSelector } from 'react-redux';
import Badge from '../Screen/Component/AllPage/Badge';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {


  const data = useSelector(state => state.cartData.cart);
  // console.log(' cart item length on tab screen', data.length);
  const cartItemCount = data.length;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00D642',
        tabBarInactiveTintColor: '#9E9E9E',
      }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Foundation name="home" size={30} color={focused ? '#00D642' : '#9E9E9E'} />
          ),
        }}
      />
      <Tab.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            <Feather name="grid" size={30} color={focused ? '#00D642' : '#9E9E9E'} />,
        }}
      />
      <Tab.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ position: 'relative' }}>
              <Fontisto name="shopping-basket" size={30} color={focused ? '#00D642' : '#9E9E9E'} />
              <Badge count={cartItemCount} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="shopping-cart" size={30} color={focused ? '#00D642' : '#9E9E9E'} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            <Feather name="user" size={30} color={focused ? '#00D642' : '#9E9E9E'} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
