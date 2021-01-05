import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BookList ({item, deleteBook}) {

  return (
    <TouchableOpacity style={styles.book} onPress={() => console.log('clicked...')}>
      <View style={styles.bookList}>
        <Text style={styles.bookText}>{item.text}</Text>
        <MaterialIcons
        name="cancel"
        size={22}
        color="black"
        onPress={() => deleteBook(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  book: {
    padding: 15,
    backgroundColor: 'lightgreen',
    borderBottomWidth: 1,
    borderColor: 'white'
  },

  bookList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bookText: {
    fontSize: 14,
  }
});