import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function PrimaryButton ({title, onPress = () => {}}) {
  return (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={style.btnContainer}>
      <Text style={style.title}>{title}</Text>
    </View>
  </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: 'purple',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
})