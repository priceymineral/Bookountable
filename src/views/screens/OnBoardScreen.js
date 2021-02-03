import React from 'react';
import {Text, TextInput, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PrimaryButton from '../components/Button';

import { MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons'; // Black crossed out

export default function OnBoardScreen ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
      <View style={{height: 300}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: 200,
          }}
          source={require('../../../assets/favicon.png')}
        />
        {/* <MaterialCommunityIcons style={style.icon} name="ghost-off" size={24} color="black" /> */}
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}
          >Bookountable</Text>
          <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}
          >Keep Yo'self Accountable
          </Text>
        </View>

        {/* <View style={style.indicatorContainer}>
          <View style={style.currentIndicator}></View>
          <View style={style.indicator}></View>
          <View style={style.indicator}></View>
        </View> */}
        <TextInput
          placeholder='Username'
          style={style.input}
          textAlign={'center'}
        />
        <TextInput
          placeholder='Password'
          style={style.input}
          secureTextEntry={true}
          textAlign={'center'}
        />
        <PrimaryButton
        title='Login'
        onPress={() => navigation.navigate('Home')}
        />
        <View style={style.signupContainer}>
          <Text style={{fontSize: 12}}>New to Bookountable?</Text>
          <Text style={style.signUp}> Sign Up Here!</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  // icon: {
  //   width: '100%',
  //   resizeMode: 'contain',
  //   top: 150,
  // },
  input: {
    height: 60,
    padding: 8,
    fontSize: 14,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: 'lightgrey',
    borderRadius: 100,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  signUp: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'purple',
    textDecorationLine: 'underline',
  },
  signupContainer: {
    flexDirection: 'row',
  },
  // indicatorContainer: {
  //   height: 50,
  //   flex: 1,
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // currentIndicator: {
  //   height: 12,
  //   width: 30,
  //   borderRadius: 10,
  //   backgroundColor: 'purple',
  //   marginHorizontal: 5,
  // },
  // indicator: {
  //   height: 12,
  //   width: 12,
  //   borderRadius: 6,
  //   backgroundColor: 'grey',
  //   marginHorizontal: 5,
  // }
})
