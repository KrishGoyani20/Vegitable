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
import React from 'react';
import Images from '../../../Image/Index';
import {useSelector} from 'react-redux';
import CartItem from '../AllPage/CartItem';

const TrackOrderScreen = ({navigation, route}) => {
  // const data = useSelector(state => state.cartData.cart);
  // console.log('item', data);

  const {item} = route.params || {};
  console.log('trackorder........', item.name);
  console.log('trackorder........', item.id);
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
                <Text style={styles.headerText}>Track Order </Text>
              </View>
              <TouchableOpacity style={{flex: 1}}>
                <Image
                  style={styles.HeaderThreDots}
                  source={Images.ThreeDots}
                />
              </TouchableOpacity>
            </View>
            <View>
              <View>
                <CartItem item={item} />
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default TrackOrderScreen;

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
});
