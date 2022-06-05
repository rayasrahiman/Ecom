import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {Colors} from '../constants/colors';
import {FOODS} from '../data/dummy-data';

export default function FoodCard() {
    const navigation = useNavigation()
  return (
    <View style={styles.cardContainer}>
      <Text>Order Again?</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={FOODS}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: Colors.primaryWhite500,
                padding: 5,
                borderRadius: 15,
                overflow: 'hidden',
                marginHorizontal: 5,
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
                      justifyContent: 'space-between',
                      //   marginLeft: '-10%',
                    }}>
                    <Text style={{paddingLeft: 10}}>{item.name}</Text>
                    <Text style={{paddingRight: 20}}> QR {item.amount}</Text>
                  </View>
                  <View>
                    <Text
                      numberOfLines={2}
                      style={{
                        textAlign: 'left',
                        // marginRight: '20%',
                        paddingLeft: 10,
                      }}>
                      {item.subDescription}
                    </Text>
                  </View>
                  <View style={{alignItems: 'flex-end', marginTop: 10}}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.mainBackground,
    padding: 10,
    borderRadius: 6,
    marginVertical: 5,
  },
});
