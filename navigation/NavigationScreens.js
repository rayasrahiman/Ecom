import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import Product from '../screens/Product';
import RestaurantDetails from '../screens/RestaurantDetails';
import Choices from '../screens/Choices';
import CustomDrawer from './CustomDrawer';
import {Colors} from '../constants/colors';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor: Colors.mainBackground},
        drawerLabelStyle: {fontSize: 18},
        drawerContentStyle: {backgroundColor: Colors.mainBackground},
        drawerInactiveTintColor: Colors.primaryGrey200,
        drawerActiveTintColor: Colors.primaryBlack500,
        drawerActiveBackgroundColor: Colors.primaryWhite500,
        headerStyle: {
          backgroundColor: Colors.primaryPurple500,
        },
        headerTintColor: Colors.mainBackground,
        contentStyle: {backgroundColor: Colors.primaryPurple500},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({color, size}) => (
            <Ionicons name="restaurant-outline" size={size} color={color} />
          ),
        }}
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
