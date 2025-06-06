import {
  BackHandler,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../Image/Index';
import {useDispatch, useSelector} from 'react-redux';
import {createUser} from '../../Redux/Slice/AuthSlice';

const SignInFirstScreen = ({navigation}) => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const dispatch = useDispatch();

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

  const handleSignIn = () => {
    if (email != '' && password != '') {
      const checkUser = useSelector(state => state.auth.userDetails);
      if (
        checkUser &&
        checkUser.email === email &&
        checkUser.password === password
      ) {
        console.log('User already exist. Please login.');
        dispatch(createUser(userData));
        navigation.navigate('TabNavigation');
        return;
      }
    } else {
      console.log('Please enter email and password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
      <FlatList
        data={[]}
        ListHeaderComponent={
          <View>
            <View style={styles.LimageMain}>
              <Image style={styles.Limage} source={Images.LoginFirst} />
            </View>

            <View style={styles.SecBarMain}>
              <View style={styles.SecTextMain}>
                <Text style={styles.WBText}>Welcome Back!</Text>
                <Text style={styles.SmallText}>
                  Log in with your data that you intered during your
                  registration.
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
                    value={email}
                    onChangeText={value => SetEmail(value)}
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
                    value={password}
                    onChangeText={value => SetPassword(value)}
                  />
                </View>

                <View style={styles.extraLine}>
                  <View style={styles.roundMain}>
                    <Pressable>
                      <View style={styles.round} />
                    </Pressable>
                    <Text style={styles.ELtext}>Remember Me</Text>
                  </View>

                  <Pressable
                    style={styles.forgotMain}
                    onPress={() =>
                      navigation.navigate('SignInForgotPassscreen')
                    }>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                  </Pressable>
                </View>
              </View>

              <View style={styles.footer}>
                <TouchableOpacity
                  style={styles.btnSignin}
                  onPress={() => handleSignIn()}>
                  <Text style={styles.fotText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.signupMain}>
                  <Text style={styles.signtext}>Don't have an account?</Text>
                  <Pressable
                    onPress={() => navigation.navigate('SignUpFirstScreen')}>
                    <Text style={styles.signup}>Sign Up</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default SignInFirstScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  LimageMain: {maxWidth: '100%', maxHeight: '40%'},
  Limage: {objectFit: 'cover', width: '100%', maxHeight: '100%'},
  SecBarMain: {width: '100%', minHeight: '60%'},
  SecTextMain: {width: '100%', padding: 15},
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
    marginTop: 30,
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
  extraLine: {
    minWidth: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
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
  footer: {width: '100%'},
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
    marginTop: 10,
  },
  signtext: {fontSize: 14, textAlign: 'center'},
  signup: {fontSize: 14, color: '#00D642'},
});
