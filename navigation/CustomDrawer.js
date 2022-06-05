import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {Colors} from '../constants/colors';

export default function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        //   contentContainerStyle={{ backgroundColor: Colors.primaryWhite500 }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 80,
              height: 80,
              borderRadius: 80 / 2,
              borderWidth: 2,
              borderColor: 'black',
              padding: 10,
            }}>
            <Text>MA</Text>
          </View>
          <Text>ICON</Text>
        </View>
        <View>
          <Text>Name</Text>
          <Text>Phone number</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#F3F3F3',
            width: 150,
            height: '50%',
            backgroundColor: 'white',
            borderRadius: 50,
            paddingTop: 10,
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text>hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
