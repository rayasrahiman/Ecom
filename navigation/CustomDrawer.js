import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FeatherIcons from 'react-native-vector-icons/dist/Feather';

import {Colors} from '../constants/colors';

export default function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.mainProfileContainer}>
          <View style={styles.profileContainer}>
            <Text style={styles.profileText}>MA</Text>
          </View>
          <TouchableOpacity>
            <FeatherIcons
              name="edit-2"
              size={25}
              color={Colors.primaryPurple500}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainDetailContainer}>
          <Text style={styles.nameTxt}>Muhamad Abdullah</Text>
          <Text style={styles.phoneTxt}>+9847 44665562</Text>
        </View>
        <View style={styles.drawerContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    padding: 10,
    backgroundColor: Colors.primaryGreen500,
  },
  profileText: {
    color: Colors.mainBackground,
    fontWeight: 'bold',
    fontSize: 20,
  },
  mainDetailContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  nameTxt: {
    color: Colors.primaryBlack500,
    fontWeight: 'bold',
    fontSize: 20,
  },
  phoneTxt: {
    color: Colors.primaryGreen150,
    fontSize: 16,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: Colors.mainBackground,
    width: 200,
    paddingTop: 10,
  },
});
