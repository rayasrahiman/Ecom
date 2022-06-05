import {View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import IconIonicons from 'react-native-vector-icons/dist/Ionicons';

import {TABS} from '../data/dummy-data';
import {Colors} from '../constants/colors';
import TopTabbar from '../components/TopTabbar';
import RestaurantList from '../components/RestaurantList';
import Restaurant from '../components/Restaurant';

export default function Product({navigation}) {
  console.error = (error) => error.apply;
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconIonicons
          name="arrow-back"
          size={25}
          color={Colors.mainBackground}
        />
        </TouchableOpacity>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={TABS}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <View>
                  <TouchableOpacity style={styles.tabButtonContainer}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      <TopTabbar />
      <View style={{backgroundColor: Colors.mainBackground, padding: 20, marginBottom:-5}}>
        <Text style={{fontWeight:"bold", fontSize: 20, color:Colors.primaryBlack500}}>Newly Added</Text>
      </View>
      <Restaurant inverted={true} />
      <View style={{backgroundColor: Colors.mainBackground, padding: 20, marginBottom:-5}}>
        <Text style={{fontWeight:"bold", fontSize: 20, color:Colors.primaryBlack500}}>Nearby</Text>
      </View>
      <Restaurant inverted={false} />
      <View style={{backgroundColor: Colors.mainBackground, padding: 20, marginBottom:-5}}>
        <Text style={{fontWeight:"bold", fontSize: 20, color:Colors.primaryBlack500}}>Recommended for you</Text>
      </View>
      <Restaurant inverted={true} />
      <RestaurantList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: Colors.primaryPurple500,
    padding: 10,
    height: 150,
    // borderRadius: 6,
    // marginHorizontal: 5,
    // margin: 10,
  },
  tabButtonContainer: {
    borderWidth: 1,
    borderColor: Colors.primaryPurple400,
    padding: 10,
    borderRadius: 6,
    height: 40,
    // marginHorizontal: 5,
    margin: 10,
  },
});
