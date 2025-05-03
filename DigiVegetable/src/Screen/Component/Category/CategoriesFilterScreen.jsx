import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Images from '../../../Image/Index';

const CategoriesFilterScreen = ({navigation}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const FilterItems = [
    {id: 1, title: 'All'},
    {id: 2, title: 'Onion'},
    {id: 3, title: 'Carrot'},
    {id: 4, title: 'Potto'},
    {id: 5, title: 'Apple'},
    {id: 6, title: 'Pineapple'},
    {id: 7, title: 'Mango'},
    {id: 8, title: 'Beat Root'},
    {id: 9, title: 'Snacks'},
    {id: 10, title: 'Peas'},
    {id: 11, title: 'Onion'},
    {id: 12, title: 'Mango'},
    {id: 13, title: 'Snacks'},
    {id: 14, title: 'Carrot'},
    {id: 15, title: 'Apple'},
    {id: 16, title: 'Pineapple'},
    {id: 17, title: 'Potto'},
    {id: 18, title: 'Peas'},
    {id: 19, title: 'Beat Root'},
  ];

  const SelectCategory = () => {
    return (
      <View style={styles.CategoryMainView}>
        {FilterItems.map((item, index) => {
          const isSelected = selectedItems.includes(item.title); 
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.itemContainer,
                isSelected && styles.selectedItemContainer, 
              ]}
              onPress={() => handlePress(item.title)}
            >
              <Text
                style={[
                  styles.ItemsText,
                  isSelected ? styles.selectedText : styles.defaultText, 
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.leftIcon}
          onPress={() => navigation.goBack()}>
          <Image style={styles.LFImage} source={Images.LF} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Categories</Text>
      </View>
      <View>
        <SelectCategory />
      </View>
    </View>
  );
};

export default CategoriesFilterScreen;

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
    fontWeight: '600',
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
});
