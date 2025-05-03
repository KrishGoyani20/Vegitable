import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../Image/Index';
import ProductDetails from '../../API/ProductDetails';

const SearchItemScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const SearchItem = () => {
    return (
      <View>
        <FlatList
          data={ProductDetails.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase()),
          )}
          renderItem={({item}) => {
            return (
              <View style={styles.CartItemMainView}>
                <View
                  style={[
                    styles.CartImageMain,
                    {backgroundColor: item.bgColor},
                  ]}>
                  <View style={styles.cartImage}>
                    <Image style={styles.Itemimage} source={item.image} />
                  </View>
                </View>
                <View style={styles.CartTextMain}>
                  <Text style={styles.CartName} numberOfLines={2}>
                    {item.name}
                  </Text>
                  <Text style={styles.CartPrice}>₹{item.price}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'}  />
      <View>
        <View style={styles.SearchMain}>
          <Image style={styles.searchIcon} source={Images.search} />
          <TextInput
            style={styles.inputsearch}
            placeholder="Search"
            placeholderTextColor={'#000'}
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ShortFilterScreen')}>
            <Image style={styles.searchIcon} source={Images.filter} />
          </TouchableOpacity>
        </View>
        <View style={styles.SecMainView}>
          <Text style={styles.SecText}>Recent</Text>
          <Text style={styles.SecText}>Clear All</Text>
        </View>
        <View>
          <SearchItem />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchItemScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF', paddingBottom: 100},
  SearchMain: {
    flex: 1,
    width: '90%',
    minHeight: 50,
    maxHeight: 50,
    marginVertical: 10,
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
  SecMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  SecText: {
    fontSize: 16,
    fontWeight: 700,
    fontStyle: 'Urbanist',
    color: '#212121',
  },
  CartItemMainView: {
    width: '90%',
    height: 'auto',
    marginTop: 10,
    padding: 7,
    borderWidth: 0.5,
    borderColor: '#B8B8B8',
    borderRadius: 18,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  CartImageMain: {display: 'flex', height: 100, borderRadius: 18},
  cartImage: {width: 100, height: '100%', objectFit: 'cover'},
  Itemimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    borderRadius: 10,
  },
  CartTextMain: {flex: 1, justifyContent: 'center', margin: 7, gap: 3},
  CartName: {fontSize: 16, fontWeight: 600, color: '#212121'},
  CartKG: {fontSize: 14, fontWeight: 600, color: '#A1A1A1'},
  CartPrice: {fontSize: 18, fontWeight: 700, color: '#212121'},
  CartDeleteMain: {flex: 1, margin: 7},
  DeleteMain: {
    width: 26,
    height: 26,
    backgroundColor: '#F1F1F1',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  CartDelete: {width: 18, height: 18, alignItems: 'center'},
  QuntityMain: {
    width: '90%',
    height: 35,
    marginTop: 30,
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
  },
  QuntityText: {fontWeight: 700, color: '#101010'},
  AddSub: {width: 14, height: 14},
});
