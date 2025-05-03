import {
  BackHandler,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../Image/Index';

const SignUpFirstScreen = ({navigation}) => {
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    // <SafeAreaView style={styles.container}>
    <View>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
      <ScrollView >
        <View style={styles.LimageMain}>
          <Image style={styles.Limage} source={Images.SF} />
        </View>

        <View style={styles.SecBarMain}>
          <View style={styles.SecTextMain}>
            <Text style={styles.WBText}>Let’s get started!</Text>
            <Text style={styles.SmallText}>
              Please enter your valid data in order to create an account.
            </Text>
          </View>

          <View style={styles.userInput}>
            <View style={styles.InputMain}>
              <MaterialCommunityIcons
                name="email"
                size={30}
                color={'#B8B5C3'}
                style={styles.InputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor={'#B8B5C3'}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.InputMain}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={30}
                color={'#B8B5C3'}
                style={styles.InputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={'#B8B5C3'}
                keyboardType="desault"
                secureTextEntry={true}
              />
            </View>

            <View style={styles.extraLine}>
              <View style={styles.roundMain}>
                <Pressable>
                  <View style={styles.round} />
                </Pressable>
                <Text style={styles.ELtext}>
                  I agree with the Terms of service & privacy policy.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.btnSignin}
              onPress={() => navigation.navigate('SignUpProfileScreen')}>
              <Text style={styles.fotText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.signupMain}>
              <Text style={styles.signtext}>Do you have an account? </Text>
              <Pressable
                onPress={() => navigation.navigate('SignInFirstScreen')}>
                <Text style={styles.signup}>Sign In</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
    // </SafeAreaView>
  );
};

export default SignUpFirstScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffff'},
  LimageMain: {maxWidth: '100%', maxHeight: '40%'},
  Limage: {objectFit: 'cover', width: '100%', maxHeight: '100%'},
  SecBarMain: {minWidth: '100%', maxHeight: '60%'},
  SecTextMain: {width: '100%', padding: 15, marginTop: 20},
  WBText: {
    fontSize: 24,
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    color: '#000000',
  },
  SmallText: {
    fontSize: 16,
    fontFamily: 'Source sans Pro',
    color: '#999999',
    marginTop: 10,
  },
  userInput: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 25,
  },
  InputMain: {
    minWidth: '90%',
    minHeight: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {width: '50%', color: '#000000'},
  InputIcon: {alignContent: 'center', justifyContent: 'center', padding: 10},
  extraLine: {minWidth: '90%', alignSelf: 'center', alignContent: 'center'},
  roundMain: {minWidth: '40%', flexDirection: 'row', justifyContent: 'center'},
  round: {
    margin: 5,
    minWidth: 12,
    minHeight: 12,
    borderColor: '#B8B5C3',
    borderWidth: 1,
    borderRadius: 7,
  },
  ELtext: {fontSize: 14, textAlign: 'left', color: '#B8B5C3'},
  forgotMain: {minWidth: '40%', justifyContent: 'flex-start'},
  forgotText: {textAlign: 'right', color: '#00D642'},
  footer: {flex: 1},
  btnSignin: {
    minWidth: '80%',
    minHeight: 45,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#00D642',
    justifyContent: 'center',
    marginTop: 35,
  },
  fotText: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  signupMain: {
    minWidth: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  signtext: {fontSize: 14, textAlign: 'center'},
  signup: {fontSize: 14, color: '#00D642'},
});
