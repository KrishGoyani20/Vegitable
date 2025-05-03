import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../Image/Index';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import {CheckMethod} from '../../../Redux/Slice/PaymentMethodSlice';

const BasketPaymentScreen = ({navigation}) => {
  const [showOnlinePayment, setShowOnlinePayment] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const PaymentMethod = [
    {
      id: 1,
      title: 'Online Payment',
      icon: Images.OnlinePayment,
    },
    {
      id: 2,
      title: 'Cash on Delivery',
      icon: Images.OflinePayment,
    },
  ];
  const OnlinePaymentMethod = [
    {
      id: 1,
      title: 'RazorPay',
      image: Images.razorpay,
    },
    {
      id: 2,
      title: 'PayU',
      image: Images.PayU,
    },
    {
      id: 3,
      title: 'Instamojo',
      image: Images.instamojo,
    },
    {
      id: 4,
      title: 'PayPal',
      image: Images.PayPal,
    },
  ];
  const ChoosePaymentMethos = () => {
    return (
      <View>
        <FlatList
          data={PaymentMethod}
          renderItem={({item}) => {
            return (
              <Pressable
                style={styles.AddressMainView}
                onPress={() => {
                  if (item.title === 'Online Payment') {
                    setShowOnlinePayment(true);
                    console.log('Online Payment');
                    dispatch(CheckMethod(item.title));
                  } else {
                    setModalVisible(true);
                    dispatch(CheckMethod(item.title));
                    console.log('Offline Payment');
                  }
                }}>
                <View style={styles.AddressMapIconMain}>
                  <View style={styles.AddIconMain}>
                    <Image style={styles.MapIcon} source={item.icon} />
                  </View>
                </View>
                <View style={styles.AddressTextMain}>
                  <Text style={styles.HomeText}>{item.title}</Text>
                </View>
                <TouchableOpacity style={styles.AddressChangeMainIcon}>
                  <View />
                </TouchableOpacity>
              </Pressable>
            );
          }}
        />
      </View>
    );
  };

  const OnlinePayment = () => {
    return (
      <View>
        <FlatList
          data={OnlinePaymentMethod}
          renderItem={({item}) => {
            return (
              <Pressable
                style={styles.AddressMainView}
                onPress={() => setModalVisible(true)}>
                <View style={styles.OnlineIconMain}>
                  <View style={styles.OnlineIcon}>
                    <Image style={styles.OnlinePayICon} source={item.image} />
                  </View>
                </View>
                <View style={styles.AddressTextMain}>
                  <Text style={styles.HomeText}>{item.title}</Text>
                </View>
                <TouchableOpacity style={styles.AddressChangeMainIcon}>
                  <View />
                </TouchableOpacity>
              </Pressable>
            );
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => navigation.goBack()}>
            <Image style={styles.LFImage} source={Images.LF} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Payment Methods</Text>
        </View>
      </View>
      <View style={styles.SecTextMain}>
        <Text style={styles.SecText}>
          Select the payment method you want to use.
        </Text>
      </View>
      <View>
        {showOnlinePayment ? <OnlinePayment /> : <ChoosePaymentMethos />}
      </View>
      <View>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          transparent={true}>
          <View style={styles.modalView}>
            <View>
              <Image
                style={styles.ModalSuccessImage}
                source={Images.OderSuccesful}
              />
            </View>
            <View style={styles.ModalSecTextMain}>
              <Text style={styles.ModalSuccessText}>Order Successful!</Text>
              <Text style={styles.SmallText}>
                You have successfully made order
              </Text>
            </View>

            <View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => navigation.navigate('BasketViewOrderScreen')}>
                <Text style={styles.buttonText}>View Order</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.DownloadButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.downloadText}>Downloard E-Receipt</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default BasketPaymentScreen;

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
    flex: 10,
    fontSize: 24,
    fontWeight: 600,
    color: '#06060F',
    textAlign: 'center',
  },
  SecTextMain: {
    flex: 1,
    maxHeight: 50,
    marginHorizontal: 20,
  },
  SecText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#424242',
  },
  AddressMainView: {
    flex: 1,
    width: '90%',
    minHeight: 80,
    padding: 7,
    margin: 7,
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 22,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  AddressMapIconMain: {
    flex: 1,
    maxWidth: 50,
    height: 50,
    borderRadius: 48 / 2,
    borderWidth: 12,
    borderColor: '#1010101F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddIconMain: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#00D642',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MapIcon: {
    width: 30,
    height: 30,
  },
  OnlineIconMain: {
    flex: 1,
    maxWidth: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  OnlineIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  OnlinePayICon: {width: 48, height: 50},
  AddressTextMain: {flex: 1, marginLeft: 10},
  HomeText: {fontSize: 18, fontWeight: 700, color: '#212121'},
  AddText: {fontSize: 12, fontWeight: 500, color: '#616161'},
  AddressChangeMainIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#D0D0D0',
    borderRadius: 20 / 2,
    marginRight: 14,
  },
  modalViewMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ModalSuccessImage: {
    width: 150,
    height: 150,
    objectFit: 'cover',
    alignSelf: 'center',
  },
  ModalSecTextMain: {width: '100%', padding: 15, marginTop: 10},
  ModalSuccessText: {
    fontSize: 24,
    fontFamily: 'Urbanist',
    fontWeight: 700,
    color: '#212121',
    textAlign: 'center',
  },
  SmallText: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: 'Source sans Pro',
    color: '#212121',
    margin: 14,
    textAlign: 'center',
  },
  submitButton: {
    marginTop: 12,
    backgroundColor: '#00D632',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  DownloadButton: {
    marginTop: 12,
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 700,
  },
  downloadText: {
    color: '#00D632',
    fontSize: 16,
    fontWeight: 700,
  },
});
