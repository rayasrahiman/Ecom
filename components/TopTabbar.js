import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import IconIonicons from 'react-native-vector-icons/dist/Ionicons';
import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { Colors } from '../constants/colors';

export default function TopTabbar() {
  return (
    <View
      style={{
        flexDirection: 'row',
        elevation: 10,
        backgroundColor: Colors.mainBackground,
        height: 70,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <IconIonicons name="filter" size={25} color={Colors.primaryGrey500} />
      <Text style={{color: Colors.primaryGrey500}}>Filters</Text>
      <View
        style={{
          height: 70,
          borderLeftWidth: 1,
          borderColor: Colors.primaryGrey500,
        }}
      />
      <IconMaterial
        name="food-takeout-box-outline"
        size={25}
        color={Colors.primaryGrey500}
      />
      <Text style={{color: Colors.primaryGrey500}}>Cusines</Text>
      <View
        style={{
          height: 70,
          borderLeftWidth: 1,
          borderColor: Colors.primaryGrey500,
        }}
      />
      <IconIonicons
        name="search-outline"
        size={25}
        color={Colors.primaryGrey500}
      />
      <Text style={{color: Colors.primaryGrey500}}>Search</Text>
    </View>
  );
}
