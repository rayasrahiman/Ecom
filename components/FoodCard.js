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
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../constants/colors';
import {FOODS} from '../data/dummy-data';

export default function FoodCard() {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.orderContainer}>
        <Text style={styles.orderText}>Order Again?</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={FOODS}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.mainContainer}>
              <View style={styles.container}>
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
                    <Text numberOfLines={2} style={styles.subDesc}>
                      {item.subDescription}
                    </Text>
                  </View>
                  <View style={styles.iconMainContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Choices', {data: item})
                      }
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
  orderContainer: {
    backgroundColor: Colors.mainBackground,
    padding: 20,
    marginBottom: -5,
  },
  orderText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primaryBlack500,
  },
  mainContainer: {
    backgroundColor: Colors.primaryWhite500,
    padding: 5,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  container: {
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
    justifyContent: 'space-between',
  },
  foodName: {
    paddingLeft: 10,
    fontSize: 16,
    color: Colors.primaryBlack500,
  },
  amount: {
    paddingRight: 20,
    fontSize: 16,
    color: Colors.primaryBlack500,
  },
  subDesc: {
    textAlign: 'left',
    paddingLeft: 10,
    fontSize: 14,
    color: Colors.primaryGreen150,
  },
  iconMainContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
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
