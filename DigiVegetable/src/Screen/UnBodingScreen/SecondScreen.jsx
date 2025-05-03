import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../Image/Index';

const SecondScreen = ({navigation}) => {
  const [btnPressed, setBtnPressed] = useState('Sign In');

  const btnHandal = type => {
    setBtnPressed(type);

    if (type === 'Sign In') {
      navigation.navigate('SignInFirstScreen');
    } else {
      navigation.navigate('SignUpFirstScreen');
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, marginBottom: 30, justifyContent: 'flex-end'}}
        source={Images.F4Img}>
        <View style={{justifyContents: 'flex-end'}}>
          <TouchableOpacity
            style={[
              styles.btnSignin,
              {
                backgroundColor:
                  btnPressed === 'Sign In' ? '#00D642' : '#FFFFFF',
              },
            ]}
            onPress={() => btnHandal('Sign In')}>
            <Text
              style={[
                styles.fotText,
                {
                  color: btnPressed === 'Sign In' ? '#FFFFFF' : '#000000',
                },
              ]}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnSignin,
              {
                backgroundColor:
                  btnPressed === 'Sign Up' ? '#00D642' : '#FFFFFF',
              },
            ]}
            onPress={() => btnHandal('Sign Up')}>
            <Text
              style={[
                styles.fotText,
                {
                  color: btnPressed === 'Sign Up' ? '#FFFFFF' : '#000000',
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  btnSignin: {
    minWidth: '80%',
    minHeight: 45,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00d642',
    justifyContent: 'center',
    marginTop: 10,
  },
  fotText: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
