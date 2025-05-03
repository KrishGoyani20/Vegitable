import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../Image/Index';

const CategoryReviewScreen = () => {
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [selectedRatingData, setSelectedRatingData] = useState(null);
  const Rate = [{id: '5'}, {id: '4'}, {id: '3'}, {id: '2'}, {id: '1'}];

  const handleRatingPress = rating => {
    setSelectedBtn(rating.id);
    setSelectedRatingData(`Data for rating ${rating.id}`);
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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => navigation.goBack()}>
            <Image style={styles.LFImage} source={Images.LF} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Reviews</Text>
        </View>
        <View>
          <RatingToItem />
        </View>
        {selectedRatingData && (
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>{selectedRatingData}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CategoryReviewScreen;

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
    marginLeft: -40,
  },
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
  },
  dataContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
  },
});
