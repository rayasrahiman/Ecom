import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {RESTAURANTS} from '../data/dummy-data';
import {Colors} from '../constants/colors';

export default function Restaurant({inverted}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        inverted={inverted}
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
              <View style={styles.restaurantCont}>
                <Text style={styles.restaurantText}>{item.restaurant}</Text>
                <Text style={styles.subdesc}>{item.subDescription}</Text>
              </View>
              <View style={styles.mainImageCont}>
                <ImageBackground source={item.image} style={styles.imageBackg}>
                  <View style={styles.mainContainer}>
                    <View style={styles.iconContainer}>
                      <Ionicons
                        name="bookmark-outline"
                        size={20}
                        color={Colors.primaryGreen300}
                      />
                    </View>
                    <View style={styles.discContainer}>
                      <Text style={styles.discText}>
                        {item.discount}% Discount
                      </Text>
                    </View>
                  </View>
                  <View style={styles.ratingMainContainer}>
                    <View style={styles.ratingIconCont}>
                      <Ionicons
                        style={styles.ratingIcon}
                        name="star-outline"
                        size={18}
                        color={Colors.mainBackground}
                      />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                    <View style={styles.timingMainContainer}>
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
              </View>
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
  restaurantCont: {
    marginVertical: 10,
    padding: 5,
  },
  restaurantText: {
    fontSize: 18,
    color: Colors.primaryBlack500,
  },
  subdesc: {
    fontSize: 18,
    color: Colors.primaryGrey200,
  },
  mainImageCont: {
    height: 200,
    width: 300,
    marginHorizontal: 10,
  },
  imageBackg: {
    borderRadius: 15,
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    backgroundColor: Colors.mainBackground,
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: '15%',
  },
  discContainer: {
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
  ratingMainContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginTop: '30%',
    marginLeft: 10,
  },
  ratingIconCont: {
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
  timingMainContainer: {
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
