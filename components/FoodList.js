import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {FOODS} from '../data/dummy-data';
import {Colors} from '../constants/colors';

export default function FoodList() {
    const navigation = useNavigation()
  return (
    <FlatList
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
                  <Text style={{paddingRight: 20}}> QR {item.amount}</Text>
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Choices", {data: item})}
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
                    <Ionicons
                      style={{color: 'white', paddingRight: 5}}
                      name="add-outline"
                      size={15}
                      color={Colors.mainBackground}
                    />
                    <Text style={{color: 'white'}}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}
