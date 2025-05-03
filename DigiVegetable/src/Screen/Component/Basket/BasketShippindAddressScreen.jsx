import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../Image/Index';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {addAddress, selectAddress, selectedAddress} from '../../../Redux/Slice/AddressSlice';

const BasketShippindAddressScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [place, setPlace] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  const addData = useSelector(state => state.addressStore.DataAddress);

  const ChooseShippingAddress = () => {
    return (
      <View>
        <FlatList
          data={addData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.AddressMainView}
                onPress={() => {
                  dispatch(selectAddress());
                  navigation.goBack();
                }}>
                {/* <View style={styles.AddressMainView}> */}
                <View style={styles.AddressMapIconMain}>
                  <View style={styles.AddIconMain}>
                    <Image style={styles.MapIcon} source={Images.location} />
                  </View>
                </View>
                <View style={styles.AddressTextMain}>
                  <Text style={styles.HomeText}>{item.place}</Text>
                  <View>
                    <Text style={styles.AddText}>{item.address}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.AddressChangeMainIcon}>
                  <View />
                </TouchableOpacity>
                {/* </View> */}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  const AddNewAddress = () => {
    return (
      <TouchableOpacity
        style={styles.AddNewAdsMainView}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.AddNewAdsText}>Add New Address</Text>
      </TouchableOpacity>
    );
  };

  const handleAddAddress = () => {
    if (place && address) {
      dispatch(addAddress({place, address}));
      setPlace('');
      setAddress('');
      setModalVisible(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => navigation.goBack()}>
            <Image style={styles.LFImage} source={Images.LF} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Shipping Address</Text>
        </View>
      </View>

      <View style={{flex: 1}}>
        <ChooseShippingAddress />
      </View>
      <View style={{width: '100%', position: 'absolute', bottom: 100}}>
        <AddNewAddress />
      </View>

      <View style={styles.modalViewMain}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <View style={styles.modalPlaceText}>
              <TextInput
                style={styles.PlaceText}
                placeholder="Enter Place"
                placeholderTextColor={'#616161'}
                value={place}
                onChangeText={setPlace}
              />
            </View>
            <View style={styles.modalAddressText}>
              <TextInput
                style={styles.PlaceText}
                placeholder="Enter Address"
                placeholderTextColor={'#616161'}
                value={address}
                onChangeText={setAddress}
              />
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleAddAddress}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default BasketShippindAddressScreen;

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
  ShipingText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#212121',
    marginHorizontal: 20,
    padding: 10,
  },
  AddressMainView: {
    flex: 1,
    width: '90%',
    minHeight: 80,
    marginTop: 7,
    padding: 7,
    borderWidth: 0.5,
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
  AddNewAdsMainView: {
    width: '80%',
    minHeight: 50,
    backgroundColor: '#E7E7E7',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  AddNewAdsText: {
    fontSize: 16,
    fontWeight: 700,
    conlor: '#35383F',
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
  modalPlaceText: {
    marginBottom: 15,
  },
  modalAddressText: {
    marginBottom: 30,
  },
  PlaceText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#616161',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  submitButton: {
    backgroundColor: '#00D632',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
