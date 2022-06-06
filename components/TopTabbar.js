import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import IconIonicons from 'react-native-vector-icons/dist/Ionicons';
import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import {Colors} from '../constants/colors';

export default function TopTabbar() {
  return (
    <View style={styles.container}>
      <IconIonicons name="filter" size={25} color={Colors.primaryGreen150} />
      <Text style={styles.text}>Filters</Text>
      <View style={styles.borderLine} />
      <IconMaterial
        name="food-takeout-box-outline"
        size={25}
        color={Colors.primaryGreen150}
      />
      <Text style={styles.text}>Cusines</Text>
      <View style={styles.borderLine} />
      <IconIonicons
        name="search-outline"
        size={25}
        color={Colors.primaryGreen150}
      />
      <Text style={styles.text}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 10,
    backgroundColor: Colors.mainBackground,
    height: 70,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: Colors.primaryGreen150,
    fontSize: 14,
  },
  borderLine: {
    height: 70,
    borderLeftWidth: 1,
    borderLeftColor: Colors.primaryGreen150,
  },
});
