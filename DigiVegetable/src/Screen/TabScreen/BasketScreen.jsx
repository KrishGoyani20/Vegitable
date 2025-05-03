import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CartItem from '../Component/AllPage/CartItem';
import {useSelector} from 'react-redux';

const BasketScreen = ({navigation}) => {
  const data = useSelector(state => state.cartData.cart);
  const [orderID, setOrderID] = useState('');

  const totalAmount = data.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const generateOrderID = length => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    let id = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
      console.log('ID:', id);
    }

    return id;
  };
  console.log('Order ID:', orderID);
  console.log('cart item length', data.length);
  const handleCheckout = () => {
    const newOrderID = generateOrderID(10);
    setOrderID(newOrderID);
  };

  const totalQuantity = data.reduce((total, item) => total + item.quantity, 0);

  const CeckOut = () => {
    if (totalQuantity > 0) {
      handleCheckout();
      navigation.navigate('BasketChekout');
    } else {
      navigation.navigate('HomeScreen');
      Alert.alert(
        'Your cart is empty. Please add items to the cart before checking out.',
      );
    }
  };

  const TotalCartAmount = () => {
    return (
      <View style={styles.TotalMainBox}>
        <View style={styles.TextAmount}>
          <Text style={styles.Tprice}>Total Price</Text>
          <Text style={styles.Totalamount}>₹{totalAmount}.00</Text>
        </View>
        <View style={styles.TextAmount}>
          <TouchableOpacity style={styles.TotalBtn} onPress={CeckOut}>
            <Text style={styles.btnText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      <View>
        <View style={styles.HeaderMain}>
          <Text style={styles.HeaderText}>My Cart</Text>
        </View>

        <View style={styles.CartItemMain}>
          <CartItem />
        </View>

        <View style={{flex: 1}}>
          <TotalCartAmount />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

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
  CartItemMain: {width: 'auto', height: 560},
  TotalMainBox: {
    flex: 1,
    minHeight: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B8B8B8',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    // position: 'absolute',
    // bottom: 0,
    // zIndex: 1,
  },
  TextAmount: {
    flex: 1,
    alignItems: 'center',
  },
  Tprice: {fontSize: 12, fontWeight: 400, color: '#757575'},
  Totalamount: {fontSize: 24, fontWeight: 600, color: '#212121'},
  TotalBtn: {
    width: '90%',
    height: 50,
    marginRight: 20,
    borderRadius: 16,
    backgroundColor: '#00D632',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  ChekBtnMain: {
    flex: 1,
    height: 200,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#00D642',
    borderWidth: 1,
    borderColor: '#101010',
  },
});
