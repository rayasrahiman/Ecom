import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import {Colors} from '../constants/colors';
import {RESTAURANTS} from '../data/dummy-data'

export default function Choices() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={RESTAURANTS[0].image}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.imagetextContainer}>
            <Text style={{fontWeight: "bold", fontSize: 25, color: "red"}}>{RESTAURANTS[0].restaurant}</Text>
          </View>
          <View style={styles.imageSliceContainer} />
        </View>
        <View style={[styles.cardContainer, styles.top]}>
          <Text>QR 23</Text>
          <Text>Sagittis egestas</Text>
          <Text>
            Non porta vestibulum feugiat ac pretium neque vestibulum feugiat ac
            pretium. Non porta vestium feugiat acendo...
          </Text>
        </View>
        <View style={styles.warningContainer}>
          <Text>
            Fermentum est massa dolor vulputate pellentesque velit facilisis
            pulvinar.
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <Text>Choice of (1 minimum)</Text>
          <View style={styles.extraContainer}>
            <Text>QR 2</Text>
            <Text style={{}}>Extra Cheese</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text>Choice of (1 minimum)</Text>
          <View style={styles.extraContainer}>
            <Text>QR 2</Text>
            <Text style={{}}>Extra Cheese</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text>Add Comments</Text>
          <View>
            <Text>Quam egestas et, consectetur aliquam</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text>2</Text>
          </View>
          <View
            style={[
              styles.buttonContainer,
              {backgroundColor: Colors.primaryPurple500},
            ]}>
            <Text>Add to basket (QR 25)</Text>
          </View>
        </View>
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
    top: -60,
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
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.primaryGreen500,
    padding: 5,
    height: 80,
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
