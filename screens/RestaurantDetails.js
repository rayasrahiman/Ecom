import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

import {Colors} from '../constants/colors';
import {RESTAURANTS, FOODS, FOODTABS} from '../data/dummy-data';
import FoodList from '../components/FoodList';

export default function RestaurantDetails({navigation}) {
  console.error = (error) => error.apply;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={RESTAURANTS[0].image}
            resizeMode="cover"
            style={styles.image}
          />
          {/* <View style={styles.imagetextContainer}>
            <Text style={{fontWeight: "bold", fontSize: 25, color: "red"}}>{RESTAURANTS[0].restaurant}</Text>
          </View> */}
          <View style={styles.imageSliceContainer} />
        </View>
        <View style={[styles.cardContainer, styles.top]}>
          <Text>{RESTAURANTS[0].restaurant}</Text>
          <Text>{RESTAURANTS[0].subDescription}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text>{RESTAURANTS[0].rating}</Text>
            <View style={{borderWidth: 1, borderColor: 'black', height: 15}} />
            <Text>{RESTAURANTS[0].timing}</Text>
            <View style={{borderWidth: 1, borderColor: 'black', height: 15}} />
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.primaryGreen500,
                padding: 8,
                borderRadius: 6,
              }}>
              <Text>Info</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.warningContainer}>
          <Text>
            Fermentum est massa dolor vulputate pellentesque velit facilisis
            pulvinar.
          </Text>
        </View> */}
        <View style={styles.cardContainer}>
          <Text>Order Again?</Text>
          <View
            style={{
              backgroundColor: Colors.primaryWhite500,
              padding: 5,
              borderRadius: 15,
              overflow: 'hidden',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{height: 100, width: 100}}>
                <Image
                  source={FOODS[0].image}
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
                  <Text>{FOODS[0].name}</Text>
                  <Text style={{paddingRight: 20}}> QR {FOODS[0].amount}</Text>
                </View>
                <View>
                  <Text
                    numberOfLines={2}
                    style={{
                      textAlign: 'left',
                      marginRight: '20%',
                      paddingLeft: 10,
                    }}>
                    {FOODS[0].subDescription}
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
        </View>
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
    // backgroundColor: Colors.mainBackground,
  },
  imageContainer: {
    height: 300,
    backgroundColor: Colors.mainBackground,
    // marginTop: -30,
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
