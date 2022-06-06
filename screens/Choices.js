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
import {ADDONS, ADDONSFAM, ADDONSSUB} from '../data/dummy-data';

export default function Choices({navigation, route}) {
  const [foodData, setFoodData] = useState({});

  useLayoutEffect(() => {
    const data = route.params.data;
    setFoodData(data);
  }, [foodData]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={foodData.image}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.mainTopIconWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={30}
                color={Colors.mainBackground}
              />
            </TouchableOpacity>
            <Text style={styles.mainText}>{foodData.name}</Text>
            <View style={styles.mainTopRightCont}>
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
          <View style={styles.imageSliceContainer} />
        </View>
        <View style={[styles.cardContainer, styles.top]}>
          <Text style={styles.amountText}>QR {foodData.amount}</Text>
          <Text style={styles.foodText}>{foodData.name}</Text>
          <Text numberOfLines={2} style={styles.descText}>
            {foodData.description}
          </Text>
        </View>
        <View style={styles.warningContainer}>
          <Ionicons
            style={styles.infoIcon}
            name="information-circle-outline"
            size={25}
            color={Colors.primaryBrown100}
          />
          <Text style={styles.warningText}>
            Fermentum est massa dolor vulputate pellentesque velit facilisis
            pulvinar.
          </Text>
        </View>
        <View style={styles.mainTopTextCont}>
          <Text style={styles.topText}>Choice of (1 minimum)</Text>
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
                  <Text style={styles.txt}>QR {item.amount}</Text>
                  <Text style={[styles.txt, {textAlign: 'center'}]}>
                    {item.name}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <View style={styles.mainTopTextCont}>
          <Text style={styles.topText}>Choice of family substitute</Text>
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
                  <Text style={styles.txt}>QR {item.amount}</Text>
                  <Text style={[styles.txt, {textAlign: 'center'}]}>
                    {item.name}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <View style={styles.mainTopTextCont}>
          <Text style={styles.topText}>Choice of coleslow substitute</Text>
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
                  <Text style={styles.txt}>QR {item.amount}</Text>
                  <Text style={[styles.txt, {textAlign: 'center'}]}>
                    {item.name}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <View style={styles.cardContainer}>
          <Text style={styles.mainTopBtnTxt}>Add Comments</Text>
          <View>
            <Text style={styles.mainTopBtnsubTxt}>
              Quam egestas et, consectetur aliquam
            </Text>
          </View>
          <View
            style={[
              styles.buttonContainer,
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <Ionicons name="trash-bin-outline" size={18} color="red" />
            <Text style={styles.btnText}>2</Text>
            <Ionicons
              name="add-outline"
              size={18}
              color={Colors.primaryPurple500}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {backgroundColor: Colors.primaryPurple500},
            ]}>
            <Text style={styles.btnName}>Add to basket (QR 25)</Text>
          </TouchableOpacity>
        </View>
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
  mainTopIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    top: '-70%',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.mainBackground,
  },
  mainTopRightCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  amountText: {
    color: Colors.primaryGreen500,
    fontSize: 25,
  },
  foodText: {
    color: Colors.primaryBlack500,
    fontSize: 25,
  },
  descText: {
    color: Colors.primaryGreen150,
    fontSize: 16,
  },
  top: {
    // marginLeft: 20,
    // marginTop: 20,
  },
  warningContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.primaryBrown100,
    backgroundColor: Colors.primaryBrown50,
  },
  infoIcon: {
    paddingRight: 5,
  },
  warningText: {
    fontSize: 14,
    color: Colors.primaryBrown100,
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
  mainTopTextCont: {
    backgroundColor: Colors.mainBackground,
    padding: 20,
    marginBottom: -5,
  },
  topText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primaryBlack500,
  },
  txt: {
    fontSize: 14,
    color: Colors.mainBackground,
  },
  mainTopBtnTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primaryBlack500,
  },
  mainTopBtnsubTxt: {
    fontSize: 16,
    color: Colors.primaryGrey200,
  },
  btnText: {
    fontSize: 16,
    color: Colors.primaryPurple500,
  },
  btnName: {
    fontSize: 16,
    color: Colors.mainBackground,
  },
});
