import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
import Images from '../../../Image/Index';
import {useSelector} from 'react-redux';

const BasketViewOrderScreen = ({navigation}) => {
  const CartItem = useSelector(state => state.cartData.cart);
  const discount = useSelector(state => state.PromoCode.Code);
  const Shipping = useSelector(state => state.PromoCode.Shipping);
  const Method = useSelector(state => state.PaymentMethod.Method);

  const [PrintMethod, setPrintMethod] = useState();
  const [PMethod, setPMethod] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const Amount = CartItem.reduce(
    (amt, item) => amt + item.price * item.quantity,
    0,
  );

  const totalAmount = Amount - discount + Shipping;
  function generateTransactionID(length) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let transactionID = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      transactionID += characters[randomIndex];
    }
    console.log('Transaction ID:', transactionID);
    return transactionID;
  }

  // Generate a TransactionID of desired length, e.g., 10 characters
  const TransactionID = generateTransactionID(10);

  useEffect(() => {
    if (Method.includes('Online Payment')) {
      setPMethod('Paid');
      setPrintMethod('My E-Wallet');
    } else {
      setPMethod('Unpaid');
      setPrintMethod('Offline Payment');
    }
  }, [Method]);

  const CartData = () => {
    return (
      <View>
        <FlatList
          data={CartItem}
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
                  <Text style={styles.CartName}>{item.name}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.CartKG}>{item.kg}</Text>
                    <View style={styles.quantityView}>
                      <Text style={styles.quantity}>Qty : {item.quantity}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.PriceMainBox}>
                  <Text style={styles.CartPrice}>₹{item.price}.00</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  const BillView = () => {
    return (
      <View style={styles.BillMainView}>
        <View style={styles.BillTextMain}>
          <Text style={styles.BillLeftText}>Amount</Text>
          <Text style={styles.BillRightText}>₹{Amount}</Text>
        </View>
        <View style={styles.BillTextMain}>
          <Text style={styles.BillLeftText}>Promo</Text>
          <Text style={styles.BillRightText}>{discount}</Text>
        </View>

        <View style={styles.HRLineBill} />
        <View style={styles.BillTextMain}>
          <Text style={styles.BillLeftText}>Total</Text>
          <Text style={styles.BillRightText}>₹{totalAmount}</Text>
        </View>
      </View>
    );
  };

  const BillPaymentMethod = () => {
    return (
      <View>
        <View>
          <View style={styles.BillMainView}>
            <View style={styles.BillTextMain}>
              <Text style={styles.BillLeftText}>Payment Methods</Text>
              <Text style={styles.BillRightText}>{PrintMethod}</Text>
            </View>

            <View style={styles.BillTextMain}>
              <Text style={styles.BillLeftText}>Date</Text>
              <Text style={styles.BillRightText}>{discount}</Text>
            </View>

            <View style={styles.BillTextMain}>
              <Text style={styles.BillLeftText}>Transaction ID</Text>
              <Text style={styles.BillRightText}>{TransactionID}</Text>
            </View>

            <View style={styles.HRLineBill} />
            <View style={styles.BillTextMain}>
              <Text style={styles.BillLeftText}>Status</Text>
              <View style={styles.StatusMAin}>
                <Text style={styles.StatusText}>{PMethod}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const ModalHendal = () => {
    if (!modalVisible) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <FlatList
        data={[]}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.leftIcon}
                onPress={() => navigation.goBack()}>
                <Image style={styles.LFImage} source={Images.LF} />
              </TouchableOpacity>
              <View style={{flex: 1}}>
                <Text style={styles.headerText}>View Order </Text>
              </View>
              <TouchableOpacity style={{flex: 1}} onPress={ModalHendal}>
                <Image
                  style={styles.HeaderThreDots}
                  source={Images.ThreeDots}
                />
              </TouchableOpacity>
            </View>

            <View>
              <CartData />
            </View>

            <View>
              <BillView />
            </View>
            <View>
              <BillPaymentMethod />
            </View>
            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View>
                  <View style={styles.modalView}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={styles.modalInBoutton}>
                      <Image style={styles.ModalImage} source={Images.Share} />
                      <Text style={styles.ShareText}>Share E-Receipt</Text>
                    </TouchableOpacity>

                    <View style={styles.HRLineModal} />
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={styles.modalInBoutton}>
                      <Image
                        style={styles.ModalImage}
                        source={Images.download}
                      />
                      <Text style={styles.ShareText}>Download E-Receipt</Text>
                    </TouchableOpacity>

                    <View style={styles.HRLineModal} />
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={styles.modalInBoutton}>
                      <Image style={styles.ModalImage} source={Images.Print} />
                      <Text style={styles.ShareText}>Print</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default BasketViewOrderScreen;

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
    flex: 1,
    maxWidth: 35,
    height: 35,
    backgroundColor: '#F2F2F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  LFImage: {width: 30, height: 30},
  headerText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 600,
    color: '#06060F',
    textAlign: 'center',
  },
  HeaderThreDots: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 30,
  },

  CartItemMainView: {
    width: '90%',
    height: 'auto',
    marginTop: 10,
    padding: 7,
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 18,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  CartImageMain: {display: 'flex', height: 100, borderRadius: 18},
  cartImage: {width: 100, height: '100%', objectFit: 'cover'},
  image: {width: '100%', height: '100%', resizeMode: 'center'},
  CartTextMain: {flex: 1, justifyContent: 'center', margin: 7, gap: 3},
  CartName: {fontSize: 16, fontWeight: 600, color: '#212121'},
  CartKG: {fontSize: 14, fontWeight: 600, color: '#A1A1A1'},
  CartPrice: {fontSize: 18, fontWeight: 700, color: '#212121'},
  CartDeleteMain: {flex: 1, margin: 7},
  PriceMainBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityView: {
    padding: 6,
    borderRadius: 7,
    backgroundColor: '#F0F0F0',
  },
  quantity: {
    fontSize: 12,
    fontWeight: 700,
    color: '#616161',
  },
  BillMainView: {
    flex: 1,
    width: '90%',
    height: 200,
    paddingHorizontal: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
  },
  BillTextMain: {
    width: '90%',
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BillLeftText: {fontSize: 14, fontWeight: 500, color: '#616161'},
  BillRightText: {fontSize: 16, fontWeight: 600, color: '#424242'},
  StatusMAin: {
    width: 58,
    height: 28,
    backgroundColor: '#00D642',
    borderRadius: 6,
    justifyContent: 'center',
  },
  StatusText: {
    fontSize: 16,
    fontWeight: 900,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  HRLineBill: {
    width: '90%',
    borderWidth: 0.7,
    borderColor: '#EEEEEE',
    alignSelf: 'center',
  },
  modalView: {
    width: '65%',
    borderRadius: 20,
    backgroundColor: '#FAF9F6',
    padding: 20,
    alignSelf: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    top: 14,
    right: 10,
  },
  modalInBoutton: {flexDirection: 'row', justifyContent: 'flex-start', gap: 20},
  ModalImage: {width: 18, height: 18},
  ShareText: {fontSize: 14, fontWeight: 600, color: '#212121'},
  HRLineModal: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 0.7,
    borderColor: '#EEEEEE',
    alignSelf: 'center',
  },
});
