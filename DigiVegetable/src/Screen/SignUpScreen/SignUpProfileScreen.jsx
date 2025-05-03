import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../Image/Index';

const SignUpProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Pressable style={styles.leftIcon} onPress={() => navigation.goBack()}>
          <Image style={styles.LFImage} source={Images.LF} />
        </Pressable>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      <View style={styles.SectionF}>
        <View>
          <View style={styles.userImage}>
            <Feather name="user" size={30} color={'#000000'} />
          </View>
          <Pressable style={styles.iconMain}>
            <MaterialCommunityIcons
              name="camera"
              size={20}
              color={'#ffffff'}
              style={styles.UIChangeIcon}
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.UiconText}>Upload Image </Text>
        </View>
      </View>

      <View style={styles.SectionInput}>
        <View style={styles.InputMain}>
          <MaterialCommunityIcons
            name="email"
            size={30}
            color={'#B8B5C3'}
            style={styles.InputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor={'#B8B5C3'}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.InputMain}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={30}
            color={'#B8B5C3'}
            style={styles.InputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Date of birth"
            placeholderTextColor={'#B8B5C3'}
            keyboardType="default"
          />
        </View>

        <View style={styles.InputMain}>
          <Feather
            name="phone"
            size={30}
            color={'#B8B5C3'}
            style={styles.InputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor={'#B8B5C3'}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.Footer}>
        <TouchableOpacity style={styles.resendbtn}>
          <Text style={styles.resend}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.confirmbtn}
          onPress={() => navigation.navigate('SignUpOTPScreen')}>
          <Text style={styles.confirm}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpProfileScreen;

const styles = StyleSheet.create({
  container: {flex: 1, height: '100%', backgroundColor: '#ffffff'},
  header: {flex: 0, minHeight: 50, margin: 10, flexDirection: 'row'},
  leftIcon: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#F2F2F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LFImage: {width: 30, height: 30, color: '#000000'},
  headerText: {
    flex: 10,
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 50,
    textAlign: 'center',
    alignSelf: 'center',
  },
  SectionF: {flex: 1, justifyContent: 'center', alignSelf: 'center'},
  userImage: {
    minWidth: 130,
    minHeight: 130,
    borderRadius: 130 / 2,
    backgroundColor: '#F2F2F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMain: {
    minWidth: 35,
    minHeight: 35,
    backgroundColor: '#000',
    borderRadius: 35,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  UiconText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#1D1D1D',
    textAlign: 'center',
    marginTop: 20,
  },
  SectionInput: {
    flex: 2,
    minHeight: 50,
    justifyContent: 'center',
    alignContent: 'center',
    rowGap: 20,
  },
  InputMain: {
    display: 'flex',
    minWidth: '80%',
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  input: {width: '50%', color: '#000000'},
  InputIcon: {alignContent: 'center', justifyContent: 'center', padding: 10},
  Footer: {
    display: 'flex',
    minHeight: 50,
    gap: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  resendbtn: {
    flex: 1,
    minHeight: 50,
    borderColor: '#F1F1F1',
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: '#00D642',
    padding: 8,
  },
  resend: {
    color: '#00D642',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
  },
  confirmbtn: {
    flex: 1,
    minHeight: 50,
    borderColor: '#00D642',
    backgroundColor: '#00D642',
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: '#00D642',
    padding: 8,
  },
  confirm: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
  },
});
