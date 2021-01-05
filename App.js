import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import AddBookScreen from './src/views/screens/AddBookScreen';
import { StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Alert,
  Modal,
  KeyboardAvoidingView,
  TouchableHighlight
} from 'react-native';

import { MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons'; // Black crossed out ghost

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="AddBook" component={AddBookScreen} />
        {/* <Stack.Screen name="DetailsScreen" component={DetailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

