import {View, Text, Button} from 'react-native';
import React from 'react';

export default function Product({navigation}) {
  return (
    <View>
      <Text>Product</Text>
      <Button title="Next" onPress={() => navigation.navigate('Restaurant')} />
    </View>
  );
}
