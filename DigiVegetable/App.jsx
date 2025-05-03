// with Redux-toolkit
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store/Store';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/Navigation/TabNavigation';
import AppNavigate from './src/Navigation/AppNavigate';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigate />
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
