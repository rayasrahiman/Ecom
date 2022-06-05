import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import {Colors} from '../constants/colors';
import {RESTAURANTS, FOODS, FOODTABS} from '../data/dummy-data';
import FoodList from '../components/FoodList';
import FoodCard from '../components/FoodCard';

export default function RestaurantDetails({navigation, route}) {
  const [restaurantData, setRestaurantData] = useState({});
  console.error = error => error.apply;

  useLayoutEffect(() => {
    const data = route.params.data;
    setRestaurantData(data);
    // console.log(restaurantData, "DATA HERE")
  }, [restaurantData]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={restaurantData.image}
            resizeMode="cover"
            style={styles.image}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginTop: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  name="arrow-back"
                  size={30}
                  color={Colors.mainBackground}
                />
              </TouchableOpacity>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity onPress={() => {}}>
                  <Ionicons
                    name="search-outline"
                    size={30}
                    color={Colors.mainBackground}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Ionicons
                    name="bookmark-outline"
                    size={30}
                    color={Colors.mainBackground}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Ionicons
                    name="share-outline"
                    size={30}
                    color={Colors.mainBackground}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.imageSliceContainer} />
        </View>
        <View style={[styles.cardContainer, styles.top]}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              color: Colors.primaryBlack500,
            }}>
            {restaurantData.restaurant}
          </Text>
          <Text style={{fontSize: 16, color: Colors.primaryGrey200}}>
            {restaurantData.subDescription}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 5,
                  width: 100,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.mainBackground,
                }}>
                <Ionicons
                  style={{paddingRight: 5}}
                  name="star-outline"
                  size={18}
                  color={Colors.primaryGreen500}
                />
                <Text style={{color: Colors.primaryGreen500, fontSize: 14}}>
                  {restaurantData.rating}
                </Text>
              </View>
              <Text style={{color: Colors.primaryGrey200, fontSize: 14}}>
                Rating
              </Text>
            </View>
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: Colors.primaryGrey200,
                height: 15,
              }}
            />
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={{color: Colors.primaryGreen500, fontSize: 14}}>
                {restaurantData.timing}
              </Text>
              <Text style={{color: Colors.primaryGrey200, fontSize: 14}}>
                Time
              </Text>
            </View>
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: Colors.primaryGrey200,
                height: 15,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: Colors.primaryGreen500,
                padding: 8,
                borderRadius: 6,
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                style={{paddingRight: 5}}
                name="information-circle-outline"
                size={16}
                color={Colors.primaryGreen500}
              />
              <Text style={{color: Colors.primaryGreen500, fontSize: 14}}>
                Info
              </Text>
            </View>
          </View>
        </View>
        <FoodCard/>       
        <View style={styles.cardContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={FOODTABS}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => {
              return (
                <View style={styles.extraContainer}>
                  <Text>{item.name}</Text>
                </View>
              );
            }}
          />
        </View>
        <FoodList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 300,
    backgroundColor: Colors.mainBackground,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imagetextContainer: {
    top: '-75%',
    alignItems: 'center',
  },
  imageSliceContainer: {
    overflow: 'hidden',
    top: -40,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 380,
    borderBottomWidth: 50,
    borderRightColor: 'transparent',
    borderBottomColor: Colors.mainBackground,
  },
  top: {
    // marginLeft: 20,
    // marginTop: 20,
  },
  warningContainer: {
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.primaryBrown100,
    backgroundColor: Colors.primaryBrown50,
  },
  cardContainer: {
    backgroundColor: Colors.mainBackground,
    padding: 10,
    borderRadius: 6,
    marginVertical: 5,
  },
  extraContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.primaryGreen500,
    padding: 5,
    height: 60,
    width: 120,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.primaryPurple500,
    padding: 10,
  },
});
