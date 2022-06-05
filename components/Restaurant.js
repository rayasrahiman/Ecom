import {View, Text, FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import {RESTAURANTS} from '../data/dummy-data';
import {Colors} from '../constants/colors';

export default function Restaurant({inverted}) {
  const navigation = useNavigation()
  return (
    <View style={{flex: 1}}>
      <FlatList inverted={inverted}
        horizontal
        data={RESTAURANTS}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
            onPress={() =>
              navigation.navigate('Restaurant', {
                data: item,
              })
            }>
              <View style={{marginVertical: 10, padding: 5}}>
                <Text style={{fontSize: 18, color: Colors.primaryBlack500}}>
                  {item.restaurant}
                </Text>
                <Text style={{fontSize: 18, color: Colors.primaryGrey200}}>
                  {item.subDescription}
                </Text>
              </View>
              <View style={{height: 200, width: 300, marginHorizontal: 10}}>
                <ImageBackground
                  source={item.image}
                  style={{
                    borderRadius: 15,
                    overflow: 'hidden',
                    height: '100%',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <View
                      style={{
                        backgroundColor: Colors.mainBackground,
                        height: 40,
                        width: 40,
                        borderRadius: 40 / 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 10,
                        marginRight: '15%',
                      }}>
                      <Ionicons
                        name="bookmark-outline"
                        size={20}
                        color={Colors.primaryGreen300}
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: Colors.primaryGreen200,
                        padding: 5,
                        height: 30,
                        width: 150,
                        alignItems: 'center',
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                      }}>
                      <Text style={{color: Colors.mainBackground}}>
                        {item.discount}% Discount
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      marginTop: '30%',
                      marginLeft: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        padding: 5,
                        borderRadius: 10,
                        backgroundColor: Colors.primaryGreen500,
                      }}>
                      <Ionicons
                        style={{paddingRight: 5}}
                        name="star-outline"
                        size={18}
                        color={Colors.mainBackground}
                      />
                      <Text style={{color: Colors.mainBackground}}>
                        {item.rating}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 5}}>
                      <Text
                        style={{
                          paddingRight: 10,
                          color: Colors.mainBackground,
                        }}>
                        {item.timing}
                      </Text>
                      <Ionicons
                        name="timer-outline"
                        size={18}
                        color={Colors.mainBackground}
                      />
                      <Text
                        style={{
                          paddingHorizontal: 10,
                          color: Colors.mainBackground,
                        }}>
                        {item.miles}
                      </Text>

                      <IconMaterial
                        name="bike"
                        size={18}
                        color={Colors.mainBackground}
                      />
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
