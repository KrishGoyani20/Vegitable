import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../Image/Index';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import {UserLogOut} from '../../Redux/Slice/AuthSlice';

const ProfileScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [btnPressed, setBtnPressed] = useState('Yes, Log Out');
  const dispatch = useDispatch();

  const handleSelectButtonType = type => {
    setBtnPressed(type);
    if (type === 'Yes, Log Out') {
      dispatch(UserLogOut());
      navigation.navigate('SignInFirstScreen');
    }
  };
  const ProfileDetails = () => (
    <View style={styles.DetailsMainView}>
      <View>
        <TouchableOpacity
          style={styles.DetailMain}
          onPress={() => navigation.navigate('EditProfile')}>
          <Image style={styles.Icon} source={Images.PUser} />
          <Text style={styles.TextDetail}>Edit Profile</Text>
          <Image style={styles.Right} source={Images.right} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DetailMain}
          onPress={() => navigation.navigate('AddressProfile')}>
          <Image style={styles.Icon} source={Images.PAddress} />
          <Text style={styles.TextDetail}>Address</Text>
          <Image style={styles.Right} source={Images.right} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DetailMain}
          onPress={() => navigation.navigate('OrderScreen')}>
          <Image style={styles.Icon} source={Images.PCart} />
          <Text style={styles.TextDetail}>My Order</Text>
          <Image style={styles.Right} source={Images.right} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.DetailMain}>
          <Image style={styles.Icon} source={Images.Pstar} />
          <Text style={styles.TextDetail}>Most Popular</Text>
          <Image style={styles.Right} source={Images.right} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DetailMain}
          onPress={() => navigation.navigate('NotificationProfileScreen')}>
          <Image style={styles.Icon} source={Images.PNotification} />
          <Text style={styles.TextDetail}>Notification</Text>
          <Image style={styles.Right} source={Images.right} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DetailMain}
          onPress={() => navigation.navigate('PrivacyPolicyScreen')}>
          <Image style={styles.Icon} source={Images.PLock} />
          <Text style={styles.TextDetail}>Privacy Policy</Text>
          <Image style={styles.Right} source={Images.right} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.DetailMain}>
          <Image style={styles.Icon} source={Images.PHelp} />
          <Text style={styles.TextDetail}>Help Center</Text>
          <Image style={styles.Right} source={Images.right} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DetailMain}
          onPress={async () => {
            setModalVisible(true);
          }}>
          <Image style={styles.Icon} source={Images.PNotification} />
          <Text style={[styles.TextDetail, {color: 'red'}]}>Logout</Text>
          <Image style={styles.Icon} source={Images.right} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <FlatList
        data={[]}
        ListHeaderComponent={
          <View>
            <View style={styles.HeaderMain}>
              <Text style={styles.HeaderText}>My Profile</Text>
            </View>

            <View style={styles.ImageMainView}>
              <View style={styles.UserImgMain}>
                <Image style={styles.UserImg} source={Images.User} />
              </View>
              <Image style={styles.Camera} source={Images.Camera} />
            </View>

            <View style={styles.UserNameMainView}>
              <Text style={styles.UserName}>Kishor Patel</Text>
              <Text style={styles.UserEmail}>sridix@gmail.com</Text>
            </View>

            <View>
              <ProfileDetails />
            </View>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />

      <View style={{flex: 1}}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.HrLineModal} />
            <View>
              <Text style={styles.LogOutText}>Logout</Text>
            </View>
            <View style={styles.LineModal} />
            <View>
              <Text style={styles.textModal}>
                Are you sure you want to log out?
              </Text>
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
                onPress={() => {
                  handleSelectButtonType('Cencel'), setModalVisible(false);
                }}>
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
                      btnPressed === 'Yes, Log Out' ? '#00D642' : '#FFFFFF',
                  },
                ]}
                onPress={() => [handleSelectButtonType('Yes, Log Out')]}>
                <Text
                  style={[
                    styles.confirm,
                    {
                      color:
                        btnPressed === 'Yes, Log Out' ? '#FFFFFF' : '#00D642',
                    },
                  ]}>
                  Yes, Log Out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  HeaderMain: {
    width: '100%',
    height: 60,
    marginTop: 10,
    marginBottom: 15,
    alignContent: 'center',
  },
  HeaderText: {
    flex: 1,
    fontSize: 26,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 15,
    color: '#06060F',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
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
  UserNameMainView: {
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
  },
  UserName: {
    fontSize: 22,
    fontWeight: 600,
    textAlign: 'center',
    color: '#06060F',
  },
  UserEmail: {
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'center',
    color: '#9E9E9E',
    marginBottom: 6,
  },

  DetailsMainView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  DetailMain: {
    minWidth: '80%',
    marginTop: 14,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: '#ccc',
  },
  Icon: {
    width: 32,
    height: 32,
    justifyContent: 'flex-start',
  },
  Right: {
    width: 30,
    height: 30,
  },
  TextDetail: {
    width: '75%',
    fontWeight: 600,
    fontSize: 20,
    color: '#212121',
    marginLeft: 12,
    textAlign: 'left',
  },

  modalView: {
    width: '100%',
    height: '30%',
    borderRadius: 20,
    backgroundColor: '#F9F9F9',
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
  },

  HrLineModal: {
    width: 75,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 15,
  },

  LogOutText: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    color: '#F43535',
  },
  LineModal: {
    width: '90%',
    height: 2,
    backgroundColor: '#E0E0E0',
    marginTop: 10,
    alignSelf: 'center',
  },
  textModal: {
    fontSize: 18,
    fontWeight: 700,
    color: '#424242',
    textAlign: 'center',
    marginVertical: 10,
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
