import {View, Text, Button} from 'react-native';
import React from 'react';

export default function RestaurantDetails({navigation}) {
  return (
    <View>
      <Text>RestaurantDetails</Text>
      <Button title="Next" onPress={() => navigation.navigate('Choices')} />
    </View>
  );
}
