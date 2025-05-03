import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Images from '../../Image/Index';
import Modal from 'react-native-modal';
import {Rating} from 'react-native-ratings';

const OrderScreen = ({navigation}) => {
  const data = useSelector(state => state.cartData.cart);

  const [btnPressed, setBtnPressed] = useState('Pending');

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    handleSelectButtonType('Pending');
  }, []);

  const handleSelectButtonType = type => {
    setBtnPressed(type);
  };

  const ModalHendal = item => {
    console.log('Modal pressed for item:', item);
    setSelectedItem(item);

    if (!modalVisible) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  const TrackHandal = item => {
    setSelectedItem(item);
    navigation.navigate('TrackOrderScreen', {item});
  };

  const PendingData = () => {
    console.log('Pending............');
    return (
      <View>
        {data.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Image
              source={Images.PendingOrder}
              style={styles.emptyImage}
              resizeMode="cover"
            />
            <Text style={{fontSize: 20, color: '#212121', fontWeight: 700}}>
              You don't have an order yet
            </Text>
            <Text style={{fontSize: 16, color: '#212121'}}>
              You don't have an ongoing orders at this time
            </Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <View style={styles.CartItemMainView}>
                    <View
                      style={[
                        styles.CartImageMain,
                        {backgroundColor: item.bgColor},
                      ]}>
                      <View style={styles.cartImage}>
                        <Image style={styles.image} source={item.image} />
                      </View>
                    </View>
                    <View style={styles.CartTextMain}>
                      <Text style={styles.CartName} numberOfLines={2}>
                        {item.name}
                      </Text>
                      <Text style={styles.CartKG}>{item.kg}kg</Text>
                      <View style={styles.DeliveryMain}>
                        <Text style={styles.DeliveryText}>In Delivery</Text>
                      </View>
                      <Text style={styles.CartPrice}>₹{item.price}.00</Text>
                    </View>
                    <View style={styles.CartTrackOrderMain}>
                      <TouchableOpacity
                        style={styles.QuntityMain}
                        onPress={() => TrackHandal(item)}>
                        <Text style={styles.TrackOrderText}>Track Order</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        )}
      </View>
    );
  };
  
  const CompetedData = () => {
    console.log('Completed............');
    return (
      <View>
        {data.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Image
              source={Images.PendingOrder}
              style={styles.emptyImage}
              resizeMode="cover"
            />
            <Text style={{fontSize: 20, color: '#212121', fontWeight: 700}}>
              You don't have an order yet
            </Text>
            <Text style={{fontSize: 16, color: '#212121'}}>
              You don't have an ongoing orders at this time
            </Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <View style={styles.CartItemMainView}>
                    <View
                      style={[
                        styles.CartImageMain,
                        {backgroundColor: item.bgColor},
                      ]}>
                      <View style={styles.cartImage}>
                        <Image style={styles.image} source={item.image} />
                      </View>
                    </View>
                    <View style={styles.CartTextMain}>
                      <Text style={styles.CartName} numberOfLines={2}>
                        {item.name}
                      </Text>
                      <Text style={styles.CartKG}>{item.kg}kg</Text>
                      <View style={styles.DeliveryMain}>
                        <Text style={styles.DeliveryText}>Completed</Text>
                      </View>
                      <Text style={styles.CartPrice}>₹{item.price}.00</Text>
                    </View>
                    <View style={styles.CartTrackOrderMain}>
                      <TouchableOpacity
                        style={styles.QuntityMain}
                        onPress={() => ModalHendal(item)}>
                        <Text style={styles.TrackOrderText}>Review</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        )}
      </View>
    );
  };

  const CartItemData = () => {
    return (
      <View style={styles.CartItemMainView}>
        <View
          style={[
            styles.CartImageMain,
            {backgroundColor: selectedItem.bgColor},
          ]}>
          <View style={styles.cartImage}>
            <Image style={styles.image} source={selectedItem.image} />
          </View>
        </View>
        <View style={[styles.CartTextMain, {marginLeft: 24}]}>
          <Text style={styles.CartName} numberOfLines={2}>
            {selectedItem.name}
          </Text>
          <Text style={styles.CartKG}>{selectedItem.kg}kg</Text>
          <View style={styles.DeliveryMain}>
            <Text style={styles.DeliveryText}>Completed</Text>
          </View>
          <Text style={styles.CartPrice}>₹{selectedItem.price}.00</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      <View style={styles.HeaderMain}>
        <Text style={styles.HeaderText}>My Orders</Text>
      </View>

      <View style={styles.secMainBox}>
        <TouchableOpacity
          style={{
            width: '50%',
            borderBottomWidth: 3,
            borderColor: btnPressed === 'Pending' ? '#00D642' : '#EEEEEE',
          }}
          onPress={() => handleSelectButtonType('Pending')}>
          <Text
            style={[
              styles.sectionText,
              {
                color: btnPressed === 'Pending' ? '#00D642' : '#9E9E9E',
              },
            ]}>
            Pending
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '50%',
            borderBottomWidth: 3,
            borderColor: btnPressed === 'Completed' ? '#00D642' : '#EEEEEE',
          }}
          onPress={() => handleSelectButtonType('Completed')}>
          <Text
            style={[
              styles.sectionText,
              {
                color: btnPressed === 'Completed' ? '#00D642' : '#9E9E9E',
              },
            ]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionMainView}>
        {btnPressed === 'Pending' ? PendingData() : CompetedData()}
      </View>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.modalView}>
              <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: '#ccc',
                    justifyContent: 'flex-end',
                  }}
                  onPress={() => setModalVisible(false)}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#000000',
                      alignSelf: 'center',
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ModalHedarText}>
                <Text style={styles.ShareText}>Leave a review</Text>
              </View>
              <View style={styles.HRLineModal} />
              <View style={{marginBottom: 14}}>
                <CartItemData />
              </View>
              <View style={styles.HRLineModal} />
              <View style={styles.ModalHedarText}>
                <Text style={styles.ShareText}>How Is Your Order?</Text>
                <Text style={styles.ratingtext}>
                  Please give your rating & also your review...
                </Text>
                <View>
                  <Rating
                    type="heart"
                    ratingImage={Images.Ostar}
                    ratingCount={5}
                    imageSize={30}
                    style={{paddingVertical: 10, paddingHorizontal: 10}}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;

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
  secMainBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
  },
  sectionText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 10,
    color: '#9E9E9E',
  },
  sectionMainView: {
    flex: 1,
    marginTop: 16,
  },
  emptyContainer: {
    height: 550,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {width: 240, height: 240, resizeMode: 'cover'},
  CartItemMainView: {
    width: '95%',
    height: 'auto',
    marginTop: 10,
    padding: 7,
    borderWidth: 0.5,
    borderColor: '#B8B8B8',
    borderRadius: 18,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  CartImageMain: {
    display: 'flex',
    height: 110,
    alignSelf: 'center',
    borderRadius: 16,
  },
  cartImage: {width: 100, height: '100%', objectFit: 'cover'},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    borderRadius: 16,
  },
  CartTextMain: {
    flex: 1,
    minWidth: 100,
    justifyContent: 'center',
    marginLeft: 10,
  },
  CartName: {fontSize: 16, fontWeight: 600, color: '#212121'},
  CartKG: {fontSize: 14, fontWeight: 600, color: '#A1A1A1'},
  DeliveryMain: {width: 70, backgroundColor: '#10101014', borderRadius: 8},
  DeliveryText: {
    fontSize: 12,
    fontWeight: 600,
    marginHorizontal: 5,
    marginVertical: 4,
  },
  CartPrice: {fontSize: 18, fontWeight: 700, color: '#212121'},
  CartTrackOrderMain: {
    flex: 1,
    minWidth: 100,
    marginVertical: 7,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
    position: 'absolute',
    bottom: 4,
    right: 10,
  },
  QuntityMain: {
    width: '100%',
    height: 35,
    flexDirection: 'row',
    backgroundColor: '#00D642',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TrackOrderText: {
    marginHorizontal: 4,
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF',
  },

  modalView: {
    width: '100%',
    height: '60%',
    borderRadius: 20,
    backgroundColor: '#F9F9F9',
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ModalHedarText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ShareText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#212121',
  },
  ratingtext: {fontSize: 14, fontWeight: 400, color: '#212121'},
  HRLineModal: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 0.7,
    borderColor: '#EEEEEE',
    alignSelf: 'center',
    borderRadius: 20,
  },
});
