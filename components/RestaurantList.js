import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import {RESTAURANTS} from '../data/dummy-data';
import {Colors} from '../constants/colors';

export default function RestaurantList() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>All Restaurants</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={RESTAURANTS}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Restaurant', {
                  data: item,
                })
              }
              style={styles.mainContainer}>
              <View style={styles.restaurantMainCont}>
                <Text style={styles.restaurantName}>{item.restaurant}</Text>
                <Text style={styles.subDesc}>{item.subDescription}</Text>
              </View>
              <ImageBackground source={item.image} style={styles.imageBackg}>
                <View style={styles.bookMarkMainCont}>
                  <View style={styles.bookMarkContainer}>
                    <Ionicons
                      name="bookmark-outline"
                      size={20}
                      color={Colors.primaryGreen300}
                    />
                  </View>
                  <View style={styles.discMainCont}>
                    <Text style={styles.discText}>
                      {item.discount}% Discount
                    </Text>
                  </View>
                </View>
                <View style={styles.bottomMainCont}>
                  <View style={styles.ratingMainContainer}>
                    <Ionicons
                      style={styles.ratingIcon}
                      name="star-outline"
                      size={18}
                      color={Colors.mainBackground}
                    />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                  <View style={styles.timingContainer}>
                    <Text style={styles.timingText}>{item.timing}</Text>
                    <Ionicons
                      name="timer-outline"
                      size={18}
                      color={Colors.mainBackground}
                    />
                    <Text style={styles.milesText}>{item.miles}</Text>

                    <IconMaterial
                      name="bike"
                      size={18}
                      color={Colors.mainBackground}
                    />
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: Colors.mainBackground,
    padding: 20,
    marginBottom: -5,
  },
  topText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primaryBlack500,
  },
  mainContainer: {
    overflow: 'hidden',
    margin: 5,
    height: 300,
    padding: 5,
    backgroundColor: Colors.mainBackground,
  },
  restaurantMainCont: {
    marginVertical: 10,
    padding: 5,
  },
  restaurantName: {
    fontSize: 18,
    color: Colors.primaryBlack500,
  },
  subDesc: {
    fontSize: 18,
    color: Colors.primaryGrey200,
  },
  imageBackg: {
    borderRadius: 15,
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },
  bookMarkMainCont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bookMarkContainer: {
    backgroundColor: Colors.mainBackground,
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: '15%',
  },
  discMainCont: {
    backgroundColor: Colors.primaryGreen200,
    padding: 5,
    height: 30,
    width: 150,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  discText: {
    color: Colors.mainBackground,
    fontSize: 14,
  },
  bottomMainCont: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginTop: '30%',
    marginLeft: 10,
  },
  ratingMainContainer: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 10,
    backgroundColor: Colors.primaryGreen500,
  },
  ratingIcon: {
    paddingRight: 5,
  },
  ratingText: {
    color: Colors.mainBackground,
    fontSize: 16,
  },
  timingContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  timingText: {
    paddingRight: 10,
    color: Colors.mainBackground,
    fontSize: 16,
  },
  milesText: {
    paddingHorizontal: 10,
    color: Colors.mainBackground,
    fontSize: 16,
  },
});
