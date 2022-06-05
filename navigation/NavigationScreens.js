import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import Product from '../screens/Product';
import RestaurantDetails from '../screens/RestaurantDetails';
import Choices from '../screens/Choices';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => {
            <Icon name="home-outline" size={24} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Product"
        component={Product}
      />
    </Drawer.Navigator>
  );
};

const MainNavigationScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Restaurant" component={RestaurantDetails} />
        <Stack.Screen name="Choices" component={Choices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationScreens;
