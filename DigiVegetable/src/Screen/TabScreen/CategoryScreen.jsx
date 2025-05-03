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
import FruitsData from '../API/Fruits';
import Images from '../../Image/Index';

const CategoryScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const Fruits = () => {
    return (
      <FlatList
        data={FruitsData.filter(item =>
          item.name.toLowerCase().includes(searchText.toLowerCase()),
        )}
        renderItem={({item}) => {
          return (
            <View style={styles.SecCategory}>
              <TouchableOpacity
                style={styles.CatMain}
                onPress={() =>
                  navigation.navigate('categoryDetailsScreen',  { product: item })
                }>
                <Image style={styles.CategoryImage} source={item.image} />
              </TouchableOpacity>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <View>
        <Text style={styles.HeaderText}>Categories</Text>
      </View>
      <View style={styles.SearchMain}>
        <Image style={styles.searchIcon} source={Images.search} />
        <TextInput
          style={styles.inputsearch}
          placeholder="Search categories"
          placeholderTextColor={'#000'}
          value={searchText}
          onChangeText={setSearchText}
        />
        <Image style={styles.searchIcon} source={Images.filter} />
      </View>
      <FlatList
        data={[]}
        ListHeaderComponent={
          <View>
            <View>
              <Fruits />
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

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF', padding: 10},
  HeaderText: {
    fontSize: 22,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: 15,
    margin: 15,
    color: '#06060F',
  },
  SearchMain: {
    flex: 1,
    width: '90%',
    minHeight: 50,
    maxHeight: 50,
    marginBottom: 20,
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
  SecCategory: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  CatMain: {
    width: 100,
    height: 100,
    padding: 10,
    borderRadius: 120 / 2,
    backgroundColor: '#E2FFE9',
  },
  itemText: {fontWeight: 600, textAlign: 'center'},
  CategoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    resizeMode: 'center',
  },
});
