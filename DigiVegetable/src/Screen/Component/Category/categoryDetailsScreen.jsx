import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
import Images from '../../../Image/Index';
import {AddtoCart, RemoveCart} from '../../../Redux/Slice/CounterSlice';
import {useDispatch, useSelector} from 'react-redux';

const CategoryDetailsScreen = ({navigation, route}) => {
  const {product} = route.params;
  const [btnPressed, setBtnPressed] = useState('Add to Cart');

  const data = useSelector(state => state.cartData.cart);
  const dispatch = useDispatch();

  const handleSelectButtonType = type => {
    setBtnPressed(type);
    if (type === 'Add to Cart') {
      navigation.navigate('CategoryReviewScreen');
    }
  };

  const ProductDetails = () => {
    return (
      <View>
        <View>
          <ImageBackground
            style={styles.imageBackground}
            source={product.image}
            resizeMode="cover">
            <View style={styles.ImageBackMain}>
              <TouchableOpacity
                style={styles.leftIcon}
                onPress={() => navigation.goBack()}>
                <Image style={styles.LFImage} source={Images.LF} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.leftIcon}>
                <Image style={styles.LFImage} source={Images.ShareDot} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{marginHorizontal: 15, alignSelf: 'center'}}>
            <Text style={styles.ProductName}>{product.name}</Text>
            <View style={styles.SoldReviews}>
              <View style={styles.SoldMain}>
                <Text style={styles.SoldText}>{product.sold} sold </Text>
              </View>
              <Image style={styles.reviewImage} source={Images.review} />
              <View style={styles.ReviewMain}>
                <Text style={styles.ReviewText}>
                  {product.rate} ({product.review} review)
                </Text>
              </View>
            </View>
            <View style={styles.PriceOldMain}>
              <Text style={styles.PriceText}>₹{product.price}.00 </Text>
              <Text style={styles.OldPriceText}>₹{product.oldPrice}.00</Text>
            </View>
            <View style={styles.HrLine} />
            <View>
              <Text style={styles.Description}>Description</Text>
              <Text style={styles.DescriptionText} numberOfLines={2}>
                {product.description}
              </Text>
            </View>
            <View style={styles.KgQtyMain}>
              <View style={styles.KilloGramMain}>
                <Text style={styles.Killogram}>Kg</Text>
                <TouchableOpacity style={styles.ChooseKgMain}>
                  <Text style={styles.ChooseKgText}>Choose your kg</Text>
                  <Image source={Images.DDown} />
                </TouchableOpacity>
              </View>
              <View style={styles.QuantityMain}>
                <Text style={styles.Quantity}>Quantity</Text>
                <View style={styles.QuntityBtnMain}>
                  <TouchableOpacity
                    onPress={() => dispatch(RemoveCart({id: product.id}))}>
                    <Image style={styles.AddSub} source={Images.Sub} />
                  </TouchableOpacity>

                  <Text style={styles.QuntityText}>{data.Quantity || 0}</Text>

                  <TouchableOpacity
                    onPress={() => dispatch(AddtoCart({id: product.id}))}>
                    <Image style={styles.AddSub} source={Images.Add} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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
            <View>
              <ProductDetails />
            </View>
            <View style={styles.footer}>
              <TouchableOpacity
                style={[
                  styles.confirResendmbtn,
                  {
                    backgroundColor:
                      btnPressed === 'Buy Now' ? '#00D642' : '#FFFFFF',
                  },
                ]}
                onPress={() => handleSelectButtonType('Buy Now')}>
                <Image
                  style={styles.BuyAddIcon}
                  source={
                    btnPressed === 'Buy Now' ? Images.BuyNow2 : Images.BuyNow
                  }
                />
                <Text
                  style={[
                    styles.confirm,
                    {
                      color: btnPressed === 'Buy Now' ? '#FFFFFF' : '#00D642',
                    },
                  ]}>
                  Buy Now
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.confirResendmbtn,
                  {
                    backgroundColor:
                      btnPressed === 'Add to Cart' ? '#00D642' : '#FFFFFF',
                  },
                ]}
                onPress={() => {
                  handleSelectButtonType('Add to Cart');
                }}>
                <Image
                  style={styles.BuyAddIcon}
                  source={
                    btnPressed === 'Add to Cart'
                      ? Images.AddCart
                      : Images.AddToCart
                  }
                />
                <Text
                  style={[
                    styles.confirm,
                    {
                      color:
                        btnPressed === 'Add to Cart' ? '#FFFFFF' : '#00D642',
                    },
                  ]}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Modal>
                <View>
                  <Text>Choose your kg</Text>
                </View>
              </Modal>
            </View>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default CategoryDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  ImageBackMain: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    // padding: 10,
    justifyContent: 'space-between',
  },
  leftIcon: {
    width: 35,
    height: 35,
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 12,
  },
  LFImage: {width: 30, height: 30},
  imageBackground: {
    flex: 1,
    height: 320,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  ProductName: {
    fontSize: 28,
    fontWeight: 700,
    color: '#212121',
    marginVertical: 7,
  },
  SoldReviews: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
  },
  SoldMain: {
    width: 80,
    height: 30,
    backgroundColor: '#10101014',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SoldText: {
    fontSize: 12,
    fontWeight: 600,
    color: '#35383F',
  },
  reviewImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  ReviewText: {
    fontSize: 14,
    fontWeight: 500,
    color: '#424242',
  },
  ReviewMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  PriceOldMain: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PriceText: {
    fontSize: 30,
    fontWeight: 700,
    color: '#212121',
  },
  OldPriceText: {
    fontSize: 20,
    fontWeight: 600,
    color: '#9E9E9E',
    textDecorationLine: 'line-through',
  },
  HrLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    marginVertical: 10,
  },
  Description: {
    fontSize: 18,
    fontWeight: 700,
    color: '#212121',
  },
  DescriptionText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#424242',
    verticalAlign: 'middle',
  },
  KgQtyMain: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 14,
  },
  KilloGramMain: {
    width: '50%',
  },
  Killogram: {
    fontSize: 16,
    fontWeight: 700,
    color: '#212121',
  },
  ChooseKgMain: {
    width: '90%',
    height: 45,
    marginVertical: 10,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8E8E8E',
    borderRadius: 10,
    padding: 5,
  },
  ChooseKgText: {
    fontSize: 16,
    fontWeight: 700,
    color: '#757575',
  },
  DDown: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginLeft: 10,
  },
  QuantityMain: {
    width: '50%',
  },
  Quantity: {
    fontSize: 16,
    fontWeight: 700,
    color: '#212121',
  },
  QuntityBtnMain: {
    width: '90%',
    height: 45,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8E8E8E',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    padding: 5,
  },
  QuntityText: {
    fontSize: 16,
    fontWeight: 700,
    color: '#101010',
  },
  AddSub: {width: 20, height: 20, color: '#101010'},
  footer: {
    gap: 10,
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  confirResendmbtn: {
    width: '47%',
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
