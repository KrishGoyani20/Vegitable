// Badge.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Badge = ({count}) => {
  if (count === 0) return null; 
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: -10,
    top: -5,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 900,
  },
});

export default Badge;
