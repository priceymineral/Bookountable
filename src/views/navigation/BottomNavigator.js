import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AddBookScreen from '../screens/AddBookScreen';

const Tab = createBottomTabNavigator ();

export default function BottomNavigator ({navigation}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: 'purple',
      }}>
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name='home-filled' color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name='favorite' color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name='Add'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: 'purple',
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 10,
              }}>
              <Icon name='add' color='purple' size={28} onPress={() => navigation.navigate('AddBook')} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='List'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name='shopping-cart' color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name='LocalMall'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name='logout' color={color} size={28}   onPress={() => navigation.navigate('BoardScreen')} />
          ),
        }}
      />
    </Tab.Navigator>
  )
};