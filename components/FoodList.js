import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

import { FOODS } from '../data/dummy-data';
import { Colors } from '../constants/colors';

export default function FoodList() {
  return <FlatList
  data={FOODS}
  keyExtractor={(item, index) => item.id}
  renderItem={({item}) => {
    return (
      <View
        style={{
          backgroundColor: Colors.mainBackground,
          padding: 5,
          borderRadius: 15,
          overflow: 'hidden',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{height: 100, width: 100}}>
            <Image
              source={item.image}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginLeft: '-10%',
              }}>
              <Text>{item.name}</Text>
              <Text style={{paddingRight: 20}}>
                {' '}
                QR {item.amount}
              </Text>
            </View>
            <View>
              <Text
                numberOfLines={2}
                style={{
                  textAlign: 'left',
                  marginRight: '20%',
                  paddingLeft: 10,
                }}>
                {item.subDescription}
              </Text>
            </View>
            <View style={{alignItems: 'flex-end', marginRight: '20%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 40,
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.primaryPurple500,
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white', paddingRight: 5}}>+</Text>
                <Text style={{color: 'white'}}>Add</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }}
/>
}