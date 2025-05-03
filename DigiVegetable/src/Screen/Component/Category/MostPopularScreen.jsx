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
import Images from '../../../Image/Index';
import ProductDetails from '../../API/ProductDetails';
import FruitsData from '../../API/Fruits';

const MostPopularScreen = ({navigation}) => {
  const [selectedBtn, setSelectedBtn] = useState('All');

  const BtnFilter = [
    {title: 'All'},
    {title: 'Apple'},
    {title: 'Beat'},
    {title: 'Onion'},
    {title: 'BellPaperRed'},
    {title: 'Pineapple'},
    {title: 'Nescafe'},
  ];

  const filteredFruits =
    selectedBtn === 'All'
      ? FruitsData
      : FruitsData.filter(fruit => fruit.name === selectedBtn);

  const FilterBar = () => {
    return (
      <View>
        <FlatList
          data={BtnFilter}
          renderItem={({item}) => {
            const isSelected = item.title === selectedBtn;
            return (
              <View style={styles.categoryBtnMain}>
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
              </View>
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const ProductCard = () => {
    return (
      <FlatList
        data={filteredFruits}
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
                    <View style={styles.LikeimageMain}>
                      <TouchableOpacity>
                        {/* <Image
                              style={styles.LikeImage}
                              source={likes[item.id] ? item.Dlike : item.like}
                            /> */}
                      </TouchableOpacity>
                      <Image style={styles.LikeImage} source={Images.Dlike} />
                    </View>
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
                  <Text style={styles.ItemOldPrice}>{item.ondPrice}</Text>
                </View>
                <View style={styles.ItemAddMAin}>
                  <View style={styles.AddKG}>
                    <Text style={styles.ItemBKG}>{item.kg}kg</Text>
                    <TouchableOpacity onPress={() => Alert.alert('Pressed!')}>
                      <Image style={styles.DDIcon} source={Images.DDown} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.AddMain}>
                    <TouchableOpacity>
                      <Text style={styles.ItemAddCart}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => navigation.goBack()}>
            <Image style={styles.LFImage} source={Images.LF} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Most Popular</Text>
        </View>
        <View>
          <FilterBar />
        </View>
        <View>
          <ProductCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MostPopularScreen;

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
  categoryBtnMain: {
    flex: 1,
    maxHeight: 40,
    marginHorizontal: 10,
  },
  categoryFilBtn: {
    width: 75,
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
    color: '#000000',
  },
  CatFilText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#ffffff',
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
  },
  SquareOffer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
  },
  offerPer: {
    width: '50%',
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
  },
  likecart: {
    width: '50%',
    height: 60,
    margin: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  LikeimageMain: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LikeImage: {width: '70%', height: '65%'},
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
});
