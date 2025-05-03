import {
  Alert,
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
import Images from '../../Image/Index';
import FruitsData from '../API/Fruits';
import ProductDetails from '../API/ProductDetails';
import Swiper from 'react-native-swiper';
import NewArrivalData from '../API/NewArrival';
import {useDispatch} from 'react-redux';
import {addData, increment} from '../../Redux/Slice/CounterSlice';

const HomeScreen = ({navigation}) => {
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [Pressed, setPressed] = useState();

  const dispatch = useDispatch();

  const BtnFilter = [
    {id: 41, title: 'All'},
    {id: 42, title: 'Baroccoli'},
    {id: 43, title: 'Pineapple'},
    {id: 44, title: 'BellRed'},
    {id: 45, title: 'Orange'},
    {id: 46, title: 'potato'},
    {id: 47, title: 'Nescafe'},
  ];

  const filteredFruits = selectedBtn === 'All' ? FruitsData : FruitsData;

  const sortedFruits = filteredFruits.sort((a, b) => {
    if (a.name === selectedBtn) return -1;
    return 1;
  });

  const limitedFruits = sortedFruits.slice(0, 6);

  const displayedData = Fruits ? ProductDetails : ProductDetails.slice(0, 8);
  const topCategory = TopCategories
    ? ProductDetails
    : ProductDetails.slice(0, 4);

  const Fruits = () => {
    return (
      <FlatList
        data={displayedData}
        renderItem={({item}) => {
          return (
            <View style={styles.SecCategory}>
              <Pressable
                style={styles.CatMain}
                onPress={() =>
                  navigation.navigate('categoryDetailsScreen', {product: item})
                }>
                <Image style={styles.CategoryImage} source={item.image} />
              </Pressable>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
      />
    );
  };
  const SeeAll = () => {
    return (
      <View>
        <Text style={styles.SeeAll}>See All</Text>
      </View>
    );
  };
  
  const MostPopular = () => {
    return (
      <View>
        <FlatList
          data={BtnFilter}
          renderItem={({item}) => {
            const isSelected = item.title === selectedBtn;
            return (
              <View style={styles.categoryBtnMain}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MostPopularScreen')}>
                  <TouchableOpacity
                    style={[
                      styles.categoryFilBtn,
                      isSelected && styles.selectedButton,
                    ]}
                    onPress={() => setSelectedBtn(item.title)}>
                    <Text
                      style={[
                        styles.categoryFiltext,
                        isSelected && styles.CatFilText,
                      ]}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const ProductCard = () => {
    return (
      <FlatList
        data={limitedFruits}
        renderItem={({item}) => {
          return (
            <View style={styles.squareItemContainer}>
              <View
                style={[styles.squareItem, {backgroundColor: item.bgColor}]}>
                <View style={styles.SquareOffer}>
                  <View style={styles.offerPer}>
                    <Text style={styles.offPerText}>{item.off}% off</Text>
                  </View>
                  <View style={styles.likecart}>
                    <TouchableOpacity
                      style={styles.LikeimageMain}
                      onPress={() => setPressed(!Pressed)}>
                      <Image
                        style={styles.LikeImage}
                        source={Pressed ? Images.like : Images.Dlike}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.squareImageMain}>
                  <Image style={styles.squareImage} source={item.image} />
                </View>
              </View>
              <View>
                <Text style={styles.ItemName}>{item.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={styles.ItemPrice}>${item.price}/kg </Text>
                  <Text style={styles.ItemOldPrice}>{item.oldPrice}</Text>
                </View>
                <View style={styles.ItemAddMAin}>
                  <View style={styles.AddKG}>
                    <Text style={styles.ItemBKG}>{item.kg}kg</Text>
                    <TouchableOpacity onPress={() => Alert.alert('Pressed!')}>
                      <Image style={styles.DDIcon} source={Images.DDown} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.AddMain}>
                    <TouchableOpacity
                      onPress={() =>
                        dispatch(
                          increment({
                            id: item.id,
                            image: item.image,
                            name: item.name,
                            kg: item.kg,
                            price: item.price,
                            bgColor: item.bgColor,
                            quntity: 1,
                          }),
                        )
                      }>
                      <Text style={styles.ItemAddCart}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    );
  };
  const TopCategories = () => {
    return (
      <FlatList
        data={topCategory}
        renderItem={({item}) => {
          return (
            <View style={styles.squareItemContainer}>
              <View
                style={[styles.squareItem, {backgroundColor: item.bgColor}]}>
                <View style={styles.squareImageMain}>
                  <Image style={styles.squareImage} source={item.image} />
                </View>
              </View>
              <View>
                <Text style={styles.TopCatName}>{item.name}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    );
  };
  const OfferImage = () => {
    return (
      <View style={{rowGap: 12, marginTop: 5}}>
        <View style={styles.OffImgMain}>
          <Image style={styles.HDImageOff} source={Images.HDI25} />
        </View>
        <View style={styles.OffImgMain}>
          <Image style={styles.HDImageOff} source={Images.HDI30} />
        </View>
      </View>
    );
  };
  const NewArrival = () => {
    return (
      <FlatList
        data={NewArrivalData}
        renderItem={({item}) => {
          return (
            <View style={styles.squareItemContainer}>
              <View
                style={[styles.squareItem, {backgroundColor: item.bgColor}]}>
                <View style={styles.SquareOffer}>
                  <View style={styles.offerPer}>
                    <Text style={styles.offPerText}>{item.off}% off </Text>
                  </View>
                  <View style={styles.likecart}>
                    <View style={styles.LikeimageMain}>
                      <Image style={styles.LikeImage} source={item.like} />
                    </View>
                  </View>
                </View>
                <View style={styles.squareImageMain}>
                  <Image style={styles.squareImage} source={item.image} />
                </View>
              </View>
              <View>
                <Text style={styles.ItemName} numberOfLines={1}>
                  {item.name}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={styles.ItemPrice}>${item.price} </Text>
                  <Text style={styles.ItemOldPrice}>{item.ondPrice}</Text>
                </View>
                <View style={styles.ItemAddMAin}>
                  <View style={styles.AddKG}>
                    <Text style={styles.ItemBKG}>{item.kg}</Text>
                    <TouchableOpacity onPress={() => Alert.alert('Pressed!')}>
                      <Image style={styles.DDIcon} source={Images.DDown} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.AddMain}>
                    <TouchableOpacity
                      onPress={() =>
                        dispatch(
                          increment({
                            id: item.id,
                            image: item.image,
                            name: item.name,
                            kg: item.kg,
                            price: item.price,
                            bgColor: item.bgColor,
                            quntity: 1,
                          }),
                        )
                      }>
                      <Text style={styles.ItemAddCart}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      <FlatList
        data={[]}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <View style={styles.logomain}>
                <Image style={styles.LogoImage} source={Images.HLogo} />
              </View>
              <View style={styles.IconMain}>
                <View style={styles.LikeIcon}>
                  <TouchableOpacity>
                    <Image
                      style={styles.headerIcons}
                      source={Images.HWatchList}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.LikeIcon}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('NotificationProfileScreen')
                    }>
                    <Image style={styles.headerIcons} source={Images.NF} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.SecFirst}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchItemScreen')}>
                <View style={styles.SearchMain}>
                  <Image style={styles.searchIcon} source={Images.search} />
                  <View style={styles.inputsearch}>
                    <Text>Search</Text>{' '}
                  </View>
                  <Image style={styles.searchIcon} source={Images.filter} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.SecoTextSecond}>
              <Text style={styles.SPoffer}>Special Offers</Text>
              <Pressable onPress={() => navigation.navigate('WatchListScreen')}>
                <SeeAll />
              </Pressable>
            </View>

            <View style={styles.sexOffCard}>
              <Swiper
                removeClippedSubviews={false}
                autoplay={true}
                autoplayTimeout={3}>
                <View style={styles.slide}>
                  <Image style={styles.HDImage} source={Images.HDI} />
                </View>
                <View style={styles.slide}>
                  <Image style={styles.HDImage} source={Images.HDI25} />
                </View>
                <View style={styles.slide}>
                  <Image style={styles.HDImage} source={Images.HDI30} />
                </View>
              </Swiper>
            </View>

            <View>
              <Fruits />
            </View>
            <View style={styles.SecMostPopular}>
              <Text style={styles.SPoffer}>Most Popular</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('MostPopularScreen')}>
                <SeeAll />
              </TouchableOpacity>
            </View>
            <View style={styles.filterbtn}>
              <TouchableOpacity>
                <MostPopular />
              </TouchableOpacity>
            </View>

            <View style={{marginBottom: 10}}>
              <ProductCard />
            </View>

            <View style={styles.SecMostPopular}>
              <Text style={styles.SPoffer}>Top Categories</Text>
              <SeeAll />
            </View>

            <View style={styles.TCatMainSec}>
              <TopCategories />
            </View>

            <View>
              <OfferImage />
            </View>

            <View style={styles.SecMostPopular}>
              <Text style={styles.SPoffer}>New Arrival</Text>
              <SeeAll />
            </View>

            <View>
              <NewArrival />
            </View>
          </View>
        }
        renderItem={() => null}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  header: {
    flex: 1,
    minHeight: 50,
    flexDirection: 'row',
  },
  logomain: {width: '65%', alignItems: 'flex-end'},
  LogoImage: {width: '100%', height: 35, marginLeft: 5},
  IconMain: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30,
    gap: 10,
  },
  LikeIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#F2F2F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcons: {width: 24, height: 24, color: 'red'},
  SecFirst: {
    flex: 1,
    minWidth: '90%',
    alignSelf: 'center',
    maxHeight: 50,
    margin: 10,
  },
  SearchMain: {
    flex: 1,
    minHeight: 50,
    maxHeight: 50,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#06060F4D',
    borderRadius: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIcon: {width: 28, height: 28},
  inputsearch: {flex: 1, fontSize: 18, color: '#000000'},
  SPoffer: {fontSize: 18, fontWeight: 600, color: '#1D1D1D'},
  SeeAll: {fontSize: 16, fontWeight: 600, color: '#1D1D1D'},
  SecoTextSecond: {
    flex: 1,
    minHeight: 40,
    maxHeight: 40,
    // marginTop: 40,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sexOffCard: {
    width: '100%',
    maxHeight: 200,
    flexDirection: 'row',
    backgroundColor: '#0EB177',
  },
  slide: {
    flex: 1,
    height: 200,
  },
  HDImage: {width: '100%', height: 200, objectFit: 'cover'},
  SecCategory: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  CatMain: {
    width: 60,
    height: 60,
    padding: 7,
    borderRadius: 60 / 2,
    backgroundColor: '#E2FFE9',
  },
  itemText: {fontWeight: 600, textAlign: 'center'},
  CategoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    borderRadius: 20,
  },
  SecMostPopular: {
    flex: 1,
    minHeight: 40,
    maxHeight: 40,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterbtn: {flex: 1},
  categoryBtnMain: {
    flex: 1,
    maxHeight: 40,
    marginHorizontal: 5,
  },
  categoryFilBtn: {
    width: 'auto',
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    borderColor: '#CCC7C7',
  },
  selectedButton: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  categoryFiltext: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    marginHorizontal: 25,
  },
  CatFilText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#FFFFFF',
  },
  squareItemContainer: {
    flex: 1,
    height: 'auto',
    marginTop: 10,
    padding: 10,
  },
  squareItem: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#CCC',
  },
  SquareOffer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
  },
  offerPer: {
    width: '55%',
    height: 50,
    borderBottomEndRadius: 25,
    backgroundColor: '#689F39',
  },
  offPerText: {
    fontSize: 16,
    fontWeight: 700,
    color: '#FFFFFF',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 7,
    zIndex: 1,
    marginVertical: -2,
  },
  likecart: {
    width: '45%',
    height: 60,
    margin: 0,
    position: 'absolute',
    top: 25,
    right: -4,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  LikeimageMain: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  LikeImage: {
    width: '70%',
    height: '70%',
    alignSelf: 'center',
  },
  squareImageMain: {
    width: '90%',
    height: '90%',
  },
  squareImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
  ItemName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0.41,
  },
  ItemPrice: {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: 0.41,
    color: '#1D1D1D',
  },
  ItemOldPrice: {
    fontSize: 14,
    fontWeight: 500,
    color: '#9E9E9E',
    textDecorationLine: 'line-through',
  },
  ItemAddMAin: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AddMain: {
    width: '47%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00D642',
    borderRadius: 7,
  },
  AddKG: {
    width: '47%',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 7,
  },
  DDIcon: {width: 10, height: 8},
  ItemBKG: {
    fontSize: 16,
    fontWeight: 600,
    color: '#767676',
    justifyContent: 'space-between',
  },
  ItemAddCart: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF',
  },
  TopCatName: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
  },
  OffImgMain: {
    display: 'flex',
    alignItems: 'center',
  },
  HDImageOff: {
    width: '95%',
    height: 180,
    borderRadius: 20,
    resizeMode: 'center',
  },
});
