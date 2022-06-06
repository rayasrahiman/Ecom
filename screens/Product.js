import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import IconIonicons from 'react-native-vector-icons/dist/Ionicons';

import {TABS} from '../data/dummy-data';
import {Colors} from '../constants/colors';
import TopTabbar from '../components/TopTabbar';
import RestaurantList from '../components/RestaurantList';
import Restaurant from '../components/Restaurant';

export default function Product({navigation}) {
  console.error = error => error.apply;

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
              <View style={styles.mainTabContainer}>
                <View>
                  <TouchableOpacity style={styles.tabButtonContainer}>
                    <Text style={styles.tabText}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      <TopTabbar />
      <View style={styles.mainTopCont}>
        <Text style={styles.mainTopText}>Newly Added</Text>
      </View>
      <Restaurant inverted={true} />
      <View style={styles.mainTopCont}>
        <Text style={styles.mainTopText}>Nearby</Text>
      </View>
      <Restaurant inverted={false} />
      <View style={styles.mainTopCont}>
        <Text style={styles.mainTopText}>Recommended for you</Text>
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
  },
  mainTabContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  tabButtonContainer: {
    borderWidth: 1,
    borderColor: Colors.mainBackground,
    padding: 10,
    borderRadius: 6,
    height: 40,
    margin: 10,
  },
  tabText: {
    fontSize: 14,
    color: Colors.mainBackground,
  },
  mainTopCont: {
    backgroundColor: Colors.mainBackground,
    padding: 20,
    marginBottom: -5,
  },
  mainTopText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primaryBlack500,
  },
});
