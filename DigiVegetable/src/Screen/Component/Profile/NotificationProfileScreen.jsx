import React from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Images from '../../../Image/Index';
import Sound from 'react-native-sound';

const NotificationScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = React.useState({
    generalNotification: true,
    sound: false,
    vibrate: false,
    specialOffers: false,
    promoDiscount: false,
    payments: true,
    cashback: true,
    appUpdates: false,
    newServiceAvailable: false,
    newTipsAvailable: false,
  });

  const toggleSwitch = key => {
    setIsEnabled(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const HabdalSwitch = () => {
    return (
      <View style={styles.content}>
        {Object.keys(isEnabled).map(key => (
          <View key={key} style={styles.row}>
            <Text style={styles.label}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#4CAF50'}}
              thumbColor={isEnabled[key] ? '#ffffff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(key)}
              value={isEnabled[key]}
            />
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => navigation.goBack()}>
            <Image style={styles.LFImage} source={Images.LF} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Notification</Text>
        </View>
      </View>
      <View>
        <HabdalSwitch />
      </View>
    </View>
  );
};

export default NotificationScreen;

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
    width: 35,
    height: 35,
    backgroundColor: '#F2F2F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  LFImage: {width: 30, height: 30},
  headerText: {
    flex: 1,
    marginRight: 22,
    fontSize: 24,
    fontWeight: 600,
    color: '#06060F',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 600,
    color: '#424242',
  },
});
