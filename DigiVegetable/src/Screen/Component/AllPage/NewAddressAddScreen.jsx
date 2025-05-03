import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Images from '../../../Image/Index';
import {Picker} from '@react-native-picker/picker';
import PhoneInput from 'react-native-phone-number-input';
import {useDispatch} from 'react-redux';
import {addAddress, setPlace} from '../../../Redux/Slice/AddressSlice';

const NewAddressAddScreen = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [countries, setCountries] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [selectedAddressType, setSelectedAddressType] = useState('Home');
  const [btnPressed, setBtnPressed] = useState('Continue');

  // redux
  const [place, setPlaceInput] = useState('');
  const [address, setAddressInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const data = {
      place: place,
      address: address,
    };
    dispatch(setPlace(data));
    navigation.navigate('AddressProfile');
  };

  const handleSelectAddressType = () => {
    setPlaceInput(selectedAddressType);

    const newAddress = {
      id: Date.now().toString(),
      place: selectedAddressType,
    };
    dispatch(addAddress(newAddress));
    // navigation.goBack();
  };

  const handleSelectButtonType = type => {
    setBtnPressed(type);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countryList = data.map(country => ({
          code: country.cca2,
          name: country.name.common,
          capital: country.capital ? country.capital[0] : 'N/A',
        }));
        setCountries(countryList);
      } catch (error) {
        console.log('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      <View>
        <FlatList
          data={[]}
          ListHeaderComponent={
            <View>
              <View>
                <View style={styles.header}>
                  <TouchableOpacity
                    style={styles.leftIcon}
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.LFImage} source={Images.LF} />
                  </TouchableOpacity>
                  <Text style={styles.headerText}>Add New Address</Text>
                </View>
              </View>

              <View>
                <View>
                  <TextInput
                    style={styles.InputBox}
                    placeholder="Enter Full Name"
                    placeholderTextColor={'#212121'}
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.InputBox}
                    placeholder="Flat/House No/Building"
                    placeholderTextColor={'#212121'}
                    keyboardType="numeric"
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.InputBox}
                    placeholder="Landmark"
                    value={address}
                    onChangeText={setAddressInput}
                    placeholderTextColor={'#212121'}
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.InputBox}
                    placeholder="Pincode"
                    placeholderTextColor={'#212121'}
                    keyboardType="numeric"
                  />
                </View>
                <View>
                  <View style={styles.InputBox}>
                    <Picker
                      selectedValue={selectedCountry}
                      onValueChange={itemValue => {
                        setSelectedCountry(itemValue);
                        const selected = countries.find(
                          country => country.code === itemValue,
                        );
                        setSelectedState(selected ? selected.capital : 'N/A');
                      }}
                      style={{color: '#212121'}}>
                      <Picker.Item label="Select Country" value="" />
                      {countries.map((country, index) => (
                        <Picker.Item
                          label={country.name}
                          value={country.code}
                          key={index}
                        />
                      ))}
                    </Picker>
                  </View>
                  <View style={styles.InputBox}>
                    {selectedState ? (
                      <Text style={{color: '#212121', paddingLeft: 10}}>
                        {selectedState}
                        {''}
                      </Text>
                    ) : (
                      <Text style={{color: '#212121', paddingLeft: 10}}>
                        Capital
                      </Text>
                    )}
                  </View>
                </View>
              </View>

              <View>
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
              </View>

              <View style={styles.RadioButtonMain}>
                <View>
                  <Text style={styles.RadioButtonText}>Address Type</Text>
                </View>
                <View style={styles.RadioBtnMainView}>
                  <TouchableOpacity
                    style={styles.RadioBtn}
                    onPress={() => {
                      handleSelectAddressType(), setSelectedAddressType('Home');
                    }}>
                    <View
                      style={[
                        styles.button,
                        {
                          width: 20,
                          height: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#000',
                          borderWidth: 5,
                          direction: 'row',
                          marginRight: 10,
                        },
                        {
                          borderColor:
                            selectedAddressType === 'Home'
                              ? 'green'
                              : '#D0D0D0',
                        },
                      ]}>
                      <View
                        style={[
                          styles.button,
                          {
                            backgroundColor:
                              selectedAddressType === 'Home'
                                ? 'green'
                                : '#FFFFFF',
                          },
                        ]}
                      />
                    </View>
                    <Text style={styles.RadioBtnText}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.RadioBtn}
                    onPress={() => {
                      handleSelectAddressType(),
                        setSelectedAddressType('Office');
                    }}>
                    <View
                      style={[
                        styles.button,
                        {
                          width: 20,
                          height: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#000',
                          borderWidth: 5,
                          marginRight: 10,
                        },
                        {
                          borderColor:
                            selectedAddressType === 'Office'
                              ? 'green'
                              : '#D0D0D0',
                        },
                      ]}>
                      <View
                        style={[
                          styles.button,
                          {alignSelf: 'center'},
                          {
                            backgroundColor:
                              selectedAddressType === 'Office'
                                ? 'green'
                                : '#FFFFFF',
                          },
                        ]}
                      />
                    </View>
                    <Text style={styles.RadioBtnText}>Office</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.footer}>
                <TouchableOpacity
                  style={[
                    styles.confirResendmbtn,
                    {
                      backgroundColor:
                        btnPressed === 'Cencel' ? '#00D642' : '#FFFFFF',
                    },
                  ]}
                  onPress={() => handleSelectButtonType('Cencel')}>
                  <Text
                    style={[
                      styles.confirm,
                      {
                        color: btnPressed === 'Cencel' ? '#FFFFFF' : '#00D642',
                      },
                    ]}>
                    Cencel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.confirResendmbtn,
                    {
                      backgroundColor:
                        btnPressed === 'Continue' ? '#00D642' : '#FFFFFF',
                    },
                  ]}
                  onPress={() => [
                    handleSelectButtonType('Continue'),
                    handleSubmit(),
                  ]}>
                  <Text
                    style={[
                      styles.confirm,
                      {
                        color:
                          btnPressed === 'Continue' ? '#FFFFFF' : '#00D642',
                      },
                    ]}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default NewAddressAddScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
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
    flex: 10,
    fontSize: 24,
    fontWeight: 600,
    color: '#06060F',
    textAlign: 'center',
  },
  InputMain: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
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
  RadioButtonMain: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 20,
    flexDirection: 'row',
  },
  RadioButtonText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#000000',
  },
  RadioBtnMainView: {
    width: '50%',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#F2F2F3',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  RadioBtn: {flexDirection: 'row'},
  RadioBtnText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#000000',
  },
  footer: {
    gap: 10,
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  confirResendmbtn: {
    width: '45%',
    height: 50,
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: '#00D642',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BuyAddIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  confirm: {
    color: '#00D642',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
  },
});
