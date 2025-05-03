import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import Images from '../../../Image/Index';
import PhoneInput from 'react-native-phone-number-input';

const EditProfile = ({navigation}) => {
  const [birthdate, setBirthdate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowPicker(false);
    setBirthdate(currentDate);
    const dateString = currentDate.toLocaleDateString();
    setFormattedDate(dateString);
  };

  const AddNewAddress = () => {
    return (
      <TouchableOpacity
        style={styles.AddNewAdsMainView}
        onPress={() => navigation.goBack()}>
        <Text style={styles.AddNewAdsText}>Add New Address</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => navigation.goBack()}>
            <Image style={styles.LFImage} source={Images.LF} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>
      </View>

      <View style={styles.ImageMainView}>
        <View style={styles.UserImgMain}>
          <Image style={styles.UserImg} source={Images.User} />
        </View>
        <Image style={styles.Camera} source={Images.Camera} />
      </View>

      <View>
        <TextInput
          style={styles.InputBox}
          placeholder="Enter Name"
          placeholderTextColor={'#212121'}
        />
      </View>
      <View>
        <TextInput
          style={[styles.InputBox, {height: 40}]} // Adjusted height for smaller input box
          placeholder="Enter Surname"
          placeholderTextColor={'#212121'}
        />
      </View>
      <View style={styles.InputMain}>
        <TouchableOpacity
          style={[styles.InputBox, {height: 40}]} // Adjusted height for smaller input box
          onPress={() => setShowPicker(true)}>
          <Text
            style={{
              color: '#212121',
            }}>
            {formattedDate || 'Select Birthdate'}
          </Text>
        </TouchableOpacity>
        <Image style={styles.Icon} source={Images.PCalender} />
      </View>
      {showPicker && (
        <DateTimePicker
          value={birthdate}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <View style={styles.InputMain}>
        <TextInput
          style={[styles.InputBox, {height: 40}]} // Adjusted height for smaller input box
          placeholder="Enter Email"
          placeholderTextColor={'#212121'}
          keyboardType="email-address"
        />
        <Image style={styles.Icon} source={Images.PEmail} />
      </View>

      <View style={styles.InputMain}>
        <PhoneInput
          style={[styles.InputBoxPhone, {height: 30}]}
          defaultValue={phoneNumber}
          defaultCode="IN"
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />
      </View>

      <View>
        <AddNewAddress />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    width: '100%',
    minHeight: 50,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  leftIcon: {
    width: 35,
    height: 35,
    backgroundColor: '#F2F2F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  LFImage: {width: 30, height: 30},
  headerText: {
    flex: 1,
    marginRight: 22,
    fontSize: 24,
    fontWeight: 600,
    color: '#06060F',
    textAlign: 'center',
  },
  ImageMainView: {
    width: 200,
    height: 180,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  UserImgMain: {
    width: '100%',
    height: 150,
    alignItems: 'center',
  },
  UserImg: {
    width: 150,
    height: 150,
  },
  Camera: {
    width: 32,
    height: 32,
    position: 'absolute',
    bottom: 10,
    right: 35,
  },
  InputMain: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 10,
    flexDirection: 'row',
  },
  InputBox: {
    width: '80%',
    height: 50,
    color: '#212121',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingLeft: 10,
    fontSize: 14,
  },
  Icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 45,
    bottom: 15,
  },
  AddNewAdsMainView: {
    width: '80%',
    minHeight: 50,
    backgroundColor: '#00D642',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    position: 'absolute',
    top: 70,
  },
  AddNewAdsText: {
    fontSize: 16,
    fontWeight: 700,
    conlor: '#35383F',
  },
});
