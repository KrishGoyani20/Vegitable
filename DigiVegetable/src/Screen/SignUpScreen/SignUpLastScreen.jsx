import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../Image/Index';

const SignUpLastScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />

      <View style={styles.forgetpass}>
        <Image style={styles.Himage} source={Images.PC} />
      </View>

      <View style={styles.SecTextMain}>
        <Text style={styles.PassRecov}>Whoohooo!</Text>
        <Text style={styles.SmallText}>
          Your Email has been verified succesfully.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnSignin}
          onPress={() => navigation.navigate('TabNavigation')}>
          <Text style={styles.fotText}>Go to Shopping</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpLastScreen;

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', backgroundColor: '#fff'},
  forgetpass: {maxWidth: '100%', maxHeight: '40%', marginTop: 150},
  Himage: {
    objectFit: 'cover',
    width: 260,
    height: 260,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  SecTextMain: {width: '100%', padding: 15, marginTop: 10},
  PassRecov: {
    fontSize: 24,
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    color: '#00D642',
    textAlign: 'center',
  },
  SmallText: {
    fontSize: 16,
    fontFamily: 'Source sans Pro',
    color: '#04882D',
    marginTop: 10,
    textAlign: 'center',
  },
  footer: {width: '100%'},
  btnSignin: {
    minWidth: '85%',
    minHeight: 45,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#00D642',
    justifyContent: 'center',
    marginTop: 60,
  },
  fotText: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
