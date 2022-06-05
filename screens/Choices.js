import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import {Colors} from '../constants/colors';
import {RESTAURANTS, ADDONS, ADDONSFAM, ADDONSSUB} from '../data/dummy-data';

export default function Choices({navigation, route}) {
  const [foodData, setFoodData] = useState({});

  useLayoutEffect(() => {
    const data = route.params.data;
    setFoodData(data);
  }, [foodData]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={foodData.image}
            resizeMode="cover"
            style={styles.image}
          />
          {/* <View style={styles.imagetextContainer}> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              top: '-70%',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={30}
                color={Colors.mainBackground}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                color: Colors.mainBackground,
              }}>
              {foodData.name}
            </Text>
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
          {/* </View> */}
          <View style={styles.imageSliceContainer} />
        </View>
        <View style={[styles.cardContainer, styles.top]}>
          <Text style={{color: Colors.primaryGreen500, fontSize: 25}}>
            QR {foodData.amount}
          </Text>
          <Text style={{color: Colors.primaryBlack500, fontSize: 25}}>
            {foodData.name}
          </Text>
          <Text
            numberOfLines={2}
            style={{color: Colors.primaryGreen150, fontSize: 16}}>
            {foodData.description}
          </Text>
        </View>
        <View style={styles.warningContainer}>
          <Text>
            Fermentum est massa dolor vulputate pellentesque velit facilisis
            pulvinar.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.mainBackground,
            padding: 20,
            marginBottom: -5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: Colors.primaryBlack500,
            }}>
            Choice of (1 minimum)
          </Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ADDONS}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.cardContainer}>
                <View style={styles.extraContainer}>
                  <Text>{item.amount}</Text>
                  <Text style={{}}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
        <View
          style={{
            backgroundColor: Colors.mainBackground,
            padding: 20,
            marginBottom: -5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: Colors.primaryBlack500,
            }}>
            Choice of family substitute
          </Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ADDONSFAM}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.cardContainer}>
                <View style={styles.extraContainer}>
                  <Text>{item.amount}</Text>
                  <Text style={{}}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
        <View
          style={{
            backgroundColor: Colors.mainBackground,
            padding: 20,
            marginBottom: -5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: Colors.primaryBlack500,
            }}>
            Choice of coleslow substitute
          </Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ADDONSSUB}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.cardContainer}>
                <View style={styles.extraContainer}>
                  <Text>{item.amount}</Text>
                  <Text style={{}}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
        <View style={styles.cardContainer}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: Colors.primaryBlack500,
            }}>
            Add Comments
          </Text>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: Colors.primaryGrey200,
              }}>
              Quam egestas et, consectetur aliquam
            </Text>
          </View>
          <View
            style={[
              styles.buttonContainer,
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <Ionicons name="trash-bin-outline" size={18} color="red" />
            <Text
              style={{
                fontSize: 16,
                color: Colors.primaryPurple500,
              }}>
              2
            </Text>
            <Ionicons
              name="add-outline"
              size={18}
              color={Colors.primaryPurple500}
            />
          </View>
          <View
            style={[
              styles.buttonContainer,
              {backgroundColor: Colors.primaryPurple500},
            ]}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.mainBackground,
              }}>
              Add to basket (QR 25)
            </Text>
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
