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
import CartItem from '../AllPage/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {addCode, ShippingAmount} from '../../../Redux/Slice/PromoCodeSlice';

const BasketChekout = ({navigation}) => {
  const dispatch = useDispatch();
  const [Pcode, setPcode] = useState('');
  const [promoInput, setPromoInput] = useState('');

  const data = useSelector(state => state.cartData.cart);
  const address = useSelector(state => state.addressStore.DataAddress);

  const Amount = data.reduce(
    (amt, item) => amt + item.price * item.quantity,
    0,
  );

  const shippingAmount = data.reduce((shipAmt, item) => {
    return shipAmt + (item.quantity > 3 ? 100 : 50);
  }, 0);

  const getDiscount = promoCode => {
    const codeValue = parseInt(promoCode, 10);
    if (codeValue < 50) {
      return 39;
    } else if (codeValue >= 50 && codeValue < 100) {
      return 89;
    } else if (codeValue >= 100 && codeValue < 150) {
      return 119;
    }
    return 0;
  };
  console.log('Discount', discount, Pcode);

  const discount = getDiscount(Pcode);
  const totalAmount = Amount - discount + shippingAmount;

  const ShippingAddress = () => {
    if (address.length === 0) {
      return (
        <View style={styles.AddressMainView}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.AddText}>No shipping address available.</Text>
            <TouchableOpacity
              style={styles.AddressChangeMain}
              onPress={() =>
                navigation.navigate('BasketShippindAddressScreen')
              }>
              <Image style={styles.penIcon} source={Images.pen} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    const {place, address: addr} = address[0];

    return (
      <View>
        <View>
          <Text style={styles.ShipingText}>Shipping Address</Text>
        </View>
        <View style={styles.AddressMainView}>
          <View style={styles.AddressMapIconMain}>
            <View style={styles.AddIconMain}>
              <Image style={styles.MapIcon} source={Images.location} />
            </View>
          </View>
          <View style={styles.AddressTextMain}>
            <Text style={styles.HomeText}>{place}</Text>
            <View>
              <Text style={styles.AddText} numberOfLines={1}>
                {addr}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.AddressChangeMain}
            onPress={() => navigation.navigate('BasketShippindAddressScreen')}>
            <Image style={styles.penIcon} source={Images.pen} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ChooseShippingType = () => {
    return (
      <View style={styles.AddressMainView}>
        <View style={styles.ShippingIconMain}>
          <Image style={styles.MapIcon} source={Images.Shipping} />
        </View>
        <View style={styles.AddressTextMain}>
          <Text style={styles.CSTtext}>Choose Shipping Type</Text>
        </View>
        <TouchableOpacity
          style={styles.ShipintTypeChangeMain}
          onPress={() => navigation.navigate('BasketShippindAddressScreen')}>
          <Image style={styles.RightIcon} source={Images.right} />
        </TouchableOpacity>
      </View>
    );
  };

  const handleApply = () => {
    if (Pcode.trim()) {
      dispatch(addCode(discount));
    } else {
      alert('Please enter a valid promo code');
    }
  };

  const PromoCode = () => {
    return (
      <View style={styles.PromoMainView}>
        <TextInput
          style={styles.PCinput}
          placeholder="Enter Promo Code"
          placeholderTextColor={'#9E9E9E'}
          keyboardType="numeric"
          value={Pcode}
          onChangeText={txt => setPcode(txt)}
        />

        <TouchableOpacity
          style={styles.PromoCodeApplyMain}
          onPress={handleApply}>
          <Text style={styles.ApplyText}>Apply</Text>
        </TouchableOpacity>
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
          <Text style={styles.BillLeftText}>Shipping</Text>
          <Text style={styles.BillRightText}>₹{shippingAmount}</Text>
        </View>
        <View style={styles.BillTextMain}>
          <Text style={styles.BillLeftText}>Coupon discount</Text>
          <Text style={styles.BillRightText}>- ₹{discount}</Text>
        </View>
        <View style={styles.HRLineBill} />
        <View style={styles.BillTextMain}>
          <Text style={styles.BillLeftText}>Total</Text>
          <Text style={styles.BillRightText}>₹{totalAmount}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
              <Text style={styles.headerText}>Checkout</Text>
            </View>

            <View>
              <ShippingAddress />
            </View>

            <View>
              <View style={styles.HRLine} />
              <View style={styles.HRLine} />
            </View>
            <View>
              <CartItem />
            </View>

            <View>
              <Text style={styles.ShipingText}>Choose Shipping</Text>
            </View>

            <View>
              <ChooseShippingType />
            </View>
            <View>
              <View style={styles.HRLine} />
            </View>
            <View>
              <Text style={styles.ShipingText}>Promo Code</Text>
            </View>
            <View>
              <PromoCode />
            </View>

            <View>
              <BillView />
            </View>

            <View style={styles.FooterMain}>
              <TouchableOpacity
                style={styles.BtnMain}
                onPress={() => {
                  dispatch(ShippingAmount(shippingAmount));
                  navigation.navigate('BasketPaymentScreen');
                }}>
                <Text style={styles.BtnContinue}>Continue to Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default BasketChekout;

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', backgroundColor: '#fff'},
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
    height: 80,
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
  AddressChangeMain: {
    width: '10%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  penIcon: {width: 24, height: 24},
  HRLine: {
    width: '80%',
    borderWidth: 0.7,
    borderColor: '#EEEEEE',
    alignSelf: 'center',
    margin: 10,
    marginTop: 20,
  },

  // Choose Shipping
  StypeMainView: {flex: 1, maxWidth: '90%', minHeight: 60, color: '#B8B8B8'},
  ShippingIconMain: {
    flex: 1,
    maxWidth: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CSTtext: {fontSize: 18, fontWeight: 700, color: '#212121'},
  ShipintTypeChangeMain: {
    width: '10%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightIcon: {width: 24, height: 32},

  // promocode
  PromoMainView: {
    flex: 1,
    width: '90%',
    height: 52,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  PCinput: {fontSize: 14, color: '#212121'},
  PromoCodeApplyMain: {
    width: '20%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ApplyText: {fontSize: 14, fontWeight: 700, color: '#9E9E9E'},

  // billing
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
  HRLineBill: {
    width: '90%',
    borderWidth: 0.7,
    borderColor: '#EEEEEE',
    alignSelf: 'center',
  },
  FooterMain: {
    flex: 1,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: -10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  BtnMain: {
    width: '80%',
    height: 50,
    borderRadius: 14,
    backgroundColor: '#00D642',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnContinue: {fontSize: 18, fontWeight: 700, color: '#FFFFFF'},
});
