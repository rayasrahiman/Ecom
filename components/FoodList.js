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
import {useNavigation} from '@react-navigation/native';

import {FOODS} from '../data/dummy-data';
import {Colors} from '../constants/colors';

export default function FoodList() {
  const navigation = useNavigation();
  return (
    <FlatList
      data={FOODS}
      keyExtractor={(item, index) => item.id}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <View style={styles.containerWrap}>
              <View style={styles.imageContainer}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <View>
                <View style={styles.foodNameContainer}>
                  <Text style={styles.foodName}>{item.name}</Text>
                  <Text style={styles.amount}> QR {item.amount}</Text>
                </View>
                <View>
                  <Text numberOfLines={2} style={styles.subdesc}>
                    {item.subDescription}
                  </Text>
                </View>
                <View style={styles.buttonMainContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Choices', {data: item})}
                    style={styles.iconContainer}>
                    <Ionicons
                      style={styles.icon}
                      name="add-outline"
                      size={15}
                      color={Colors.mainBackground}
                    />
                    <Text style={styles.iconText}>Add</Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainBackground,
    padding: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  containerWrap: {
    flexDirection: 'row',
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  foodNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '-10%',
  },
  foodName: {
    fontSize: 16,
    color: Colors.primaryBlack500,
  },
  amount: {
    paddingRight: 20,
    fontSize: 16,
    color: Colors.primaryBlack500,
  },
  subdesc: {
    textAlign: 'left',
    marginRight: '20%',
    paddingLeft: 10,
    fontSize: 14,
    color: Colors.primaryGreen150,
  },
  buttonMainContainer: {
    alignItems: 'flex-end',
    marginRight: '20%',
  },
  iconContainer: {
    flexDirection: 'row',
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryPurple500,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    paddingRight: 5,
  },
  iconText: {
    color: Colors.mainBackground,
    fontSize: 14,
  },
});
