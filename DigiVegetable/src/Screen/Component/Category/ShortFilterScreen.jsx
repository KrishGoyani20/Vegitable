import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../Image/Index';
import {SafeAreaView} from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';

const ShortFilterScreen = ({navigation}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sliderValue, setSliderValue] = useState(25);
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [btnPressed, setBtnPressed] = useState('Apply');

  const Rate = [{id: '5'}, {id: '4'}, {id: '3'}, {id: '2'}, {id: '1'}];

  const FilterItems = [
    {title: 'All'},
    {title: 'Onion'},
    {title: 'Carrot'},
    {title: 'Potto'},
    {title: 'Apple'},
    {title: 'Pineapple'},
    {title: 'Mango'},
    {title: 'Beat Root'},
  ];
  const SelectCategory = () => {
    return (
      <View style={styles.CategoryMainView}>
        {FilterItems.map((item, index) => {
          const isSelected = selectedItems.includes(item.title);
          return (
            <View>
              <TouchableOpacity
                key={index}
                style={[
                  styles.itemContainer,
                  isSelected && styles.selectedItemContainer,
                ]}
                onPress={() => handlePress(item.title)}>
                <Text
                  style={[
                    styles.ItemsText,
                    isSelected ? styles.selectedText : styles.defaultText,
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <Pressable
          style={styles.ImageContainer}
          onPress={() => navigation.navigate('CategoriesFilterScreen')}>
          <Image style={styles.CategoryImage} source={Images.forward} />
        </Pressable>
      </View>
    );
  };

  const handlePress = title => {
    setSelectedItems(prevItems => {
      if (prevItems.includes(title)) {
        return prevItems.filter(item => item !== title);
      } else {
        return [...prevItems, title];
      }
    });
  };

  const ChooseBuget = () => (
    <View style={{width: '100%', height: 'auto'}}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={sliderValue}
        onValueChange={value => setSliderValue(Math.floor(value))}
        minimumTrackTintColor="#00D642"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#00D642"
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 700,
          textAlign: 'center',
          color: '#212121',
        }}>
        Range : {Math.floor(sliderValue)}
      </Text>
    </View>
  );

  const ShortToItem = () => {
    return (
      <View style={{marginVertical: 20}}>
        <FlatList
          data={FilterItems}
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
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  const handleRatingPress = rating => {
    setSelectedBtn(rating.id);
  };
  const RatingToItem = () => {
    return (
      <View>
        <FlatList
          data={Rate}
          renderItem={({item}) => {
            const selected = item.id === selectedBtn;
            return (
              <View>
                <TouchableOpacity
                  style={[
                    styles.ratingBorder,
                    selected && styles.RatingSelectBorder,
                    selected && {backgroundColor: '#00D642'},
                  ]}
                  onPress={() => handleRatingPress(item)}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={selected ? Images.WhiteStar : Images.star}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: selected ? '#FFFFFF' : '#000000',
                    }}>
                    {item.id}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
    );
  };

  const handleSelectButtonType = type => {
    setBtnPressed(type);
    // if (type === 'Apply') {
    //   navigation.navigate('MostPopularScreen');
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.leftIcon}
          onPress={() => navigation.goBack()}>
          <Image style={styles.LFImage} source={Images.LF} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sort & Filter</Text>
      </View>
      <View>
        <SelectCategory />
      </View>
      <View>
        <View style={{position: 'relative', top: 25}}>
          <View style={styles.SecMostPopular}>
            <Text style={styles.SPoffer}>Price Range</Text>
          </View>

          <View>
            <ChooseBuget />
          </View>
        </View>
        <View style={{position: 'relative', top: 60}}>
          <View style={styles.SecMostPopular}>
            <Text style={styles.SPoffer}>Sort by</Text>
          </View>
          <View>
            <ShortToItem />
          </View>
        </View>
        <View style={{position: 'relative', top: 90}}>
          <View style={styles.SecMostPopular}>
            <Text style={styles.SPoffer}>Rating</Text>
          </View>

          <View>
            <RatingToItem />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.confirResendmbtn,
            {
              backgroundColor: btnPressed === 'Reset' ? '#00D642' : '#FFFFFF',
            },
          ]}
          onPress={() => handleSelectButtonType('Reset')}>
          <Text
            style={[
              styles.confirm,
              {
                color: btnPressed === 'Reset' ? '#FFFFFF' : '#00D642',
              },
            ]}>
            Reset
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.confirResendmbtn,
            {
              backgroundColor: btnPressed === 'Apply' ? '#00D642' : '#FFFFFF',
            },
          ]}
          onPress={() => handleSelectButtonType('Apply')}>
          <Text
            style={[
              styles.confirm,
              {
                color: btnPressed === 'Apply' ? '#FFFFFF' : '#00D642',
              },
            ]}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ShortFilterScreen;

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
  CategoryMainView: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  itemContainer: {
    margin: 5,
  },
  ItemsText: {
    width: 120,
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 7,
    paddingVertical: 10,
    textAlign: 'center',
  },
  selectedText: {
    color: '#FFFFFF',
    backgroundColor: '#00D642',
    borderRadius: 20,
  },
  defaultText: {
    color: '#212121',
    backgroundColor: '#FFFFFF',
  },
  CategoryImage: {
    width: 40,
    height: 20,
  },
  ImageContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 7,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D642',
    marginRight: 12,
  },
  SecMostPopular: {
    flex: 1,
    minHeight: 40,
    maxHeight: 40,
    marginHorizontal: 15,
    marginTop: 10,
    justifyContent: 'center',
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
    backgroundColor: '#00D642',
    borderColor: 'green',
  },
  categoryFiltext: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
  },
  CatFilText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#ffffff',
  },
  SPoffer: {fontSize: 18, fontWeight: 600, color: '#1D1D1D'},
  ratingBorder: {
    width: 70,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CCC7C7',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 12,
    marginTop: 20,
  },
  RatingSelectBorder: {
    width: 70,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#00D642',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 12,
  },
  dataContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
  },
  footer: {
    gap: 10,
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
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
