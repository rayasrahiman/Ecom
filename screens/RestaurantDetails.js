import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import {Colors} from '../constants/colors';
import {FOODTABS} from '../data/dummy-data';
import FoodList from '../components/FoodList';
import FoodCard from '../components/FoodCard';

export default function RestaurantDetails({navigation, route}) {
  const [restaurantData, setRestaurantData] = useState({});
  console.error = error => error.apply;

  useLayoutEffect(() => {
    const data = route.params.data;
    setRestaurantData(data);
  }, [restaurantData]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={restaurantData.image}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.mainTopIconContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  name="arrow-back"
                  size={30}
                  color={Colors.mainBackground}
                />
              </TouchableOpacity>
              <View style={styles.mainTopRightIconCont}>
                <TouchableOpacity>
                  <Ionicons
                    name="search-outline"
                    size={30}
                    color={Colors.mainBackground}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="bookmark-outline"
                    size={30}
                    color={Colors.mainBackground}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
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
          <Text style={styles.restaurantName}>{restaurantData.restaurant}</Text>
          <Text style={styles.restaurantSubdesc}>
            {restaurantData.subDescription}
          </Text>
          <View style={styles.mainIconTxtCont}>
            <View style={styles.iconTextCont}>
              <View style={styles.iconContainer}>
                <Ionicons
                  style={styles.icon}
                  name="star-outline"
                  size={18}
                  color={Colors.primaryGreen500}
                />
                <Text style={styles.text}>{restaurantData.rating}</Text>
              </View>
              <Text style={styles.subText}>Rating</Text>
            </View>
            <View style={styles.borderLine} />
            <View style={styles.iconTextCont}>
              <View style={styles.iconContainer}>
                <Ionicons
                  style={styles.icon}
                  name="ios-timer-outline"
                  size={18}
                  color={Colors.primaryGreen500}
                />
                <Text style={{color: Colors.primaryGreen500, fontSize: 14}}>
                  {restaurantData.timing}
                </Text>
              </View>
              <Text style={styles.subText}>Time</Text>
            </View>
            <View style={styles.borderLine} />
            <View style={styles.infoContainer}>
              <Ionicons
                style={styles.infoIcon}
                name="information-circle-outline"
                size={16}
                color={Colors.primaryGreen500}
              />
              <Text style={styles.infoText}>Info</Text>
            </View>
          </View>
        </View>
        <FoodCard />
        <View style={styles.cardContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={FOODTABS}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.extraContainer}>
                  <Text style={styles.tabName}>{item.name}</Text>
                </TouchableOpacity>
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
  tabName: {
    fontSize: 16,
    color: Colors.mainBackground,
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
  mainTopIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  mainTopRightIconCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.primaryBlack500,
  },
  restaurantSubdesc: {
    fontSize: 16,
    color: Colors.primaryGrey200,
  },
  mainIconTxtCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconTextCont: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    padding: 5,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mainBackground,
  },
  icon: {
    paddingRight: 5,
  },
  text: {
    color: Colors.primaryGreen500,
    fontSize: 14,
  },
  subText: {
    color: Colors.primaryGrey200,
    fontSize: 14,
  },
  borderLine: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.primaryGrey200,
    height: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.primaryGreen500,
    padding: 8,
    borderRadius: 6,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    paddingRight: 5,
  },
  infoText: {
    color: Colors.primaryGreen500,
    fontSize: 14,
  },
});
