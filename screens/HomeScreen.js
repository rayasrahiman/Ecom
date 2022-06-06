import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { Colors } from '../constants/colors'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTxt}>Welcome To Ecom!</Text>
      <Text style={styles.subTxt}>Plaese click below</Text>
      <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate("Product")}>
        <Text style={styles.btnTxt}>Product</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: Colors.mainBackground
  },
  mainTxt:{
    fontSize: 30,
    color: Colors.primaryBlack500
  },
  subTxt:{
    fontSize: 20,
    color: Colors.primaryGrey200
  },
  btnContainer:{
    marginTop: 10,
    borderRadius: 10,
    width: 100,
    backgroundColor: Colors.primaryPurple500,
    padding: 10,
    alignItems:"center"
  },
  btnTxt:{
    fontSize: 18,
    color: Colors.mainBackground
  }
})