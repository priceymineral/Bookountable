import {ScrollView} from 'react-native-gesture-handler';
import React, {useState} from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import dummyData from '../../../dummyData';
import BookList from '../components/BookList'
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Black crossed out ghos

export default function HomeScreen () {
  // const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  // const ListCategories = () => {
  //   return (
  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       contentContainerStyle={style.categoriesListContainer}>
  //     </ScrollView>
  //   )
  // }
  const [books, setBooks] = useState(dummyData);

  const addBook = (title) => {
    if (!title) {
      Alert.alert('Error', 'Please enter a book', {text: 'Ok'});
    } else {
      setBooks(books => {
        return [{text: title}, ...books];
      });
    };
  };

  const deleteBook = (id) => {
    setBooks(books => {
      return books.filter(book => book.id != id);
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>

      <View style={style.mainHeader}>
        <MaterialCommunityIcons name="ghost-off" size={26} color="black" />
        <Text style={style.text}>Bookountable</Text>
      </View>

        <View style={style.header}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 22}}>Welcome,</Text>
              <Text style={{fontSize: 22, fontWeight: 'bold', marginLeft: 10}}>Octavio</Text>
            </View>
            <Text style={{marginTop: 5, marginBottom: 15, fontSize: 16, color: 'grey'}}>
              What are you reading today?
            </Text>
          </View>
          <Image source={require('../../assets/me.jpg')} style={{height: 40, width: 40, borderRadius: 25}} />
        </View>
        <FlatList
          data={books}
          renderItem={({item}) => <BookList item={item} deleteBook={deleteBook}/>}
        />
        {/* <View style={{marginTop: 40, flexDirection: 'row', paddinHorizontal: 20}}>
          <View style={style.inputContainer}>
            <Icon name='search' size={24}/>
            <TextInput style={{flex: 1, fontSize: 18}} placeholder='Search Book..'/>
          </View>
          <View style={style.sortBtn}>
            <Icon name='tune' size={28} color='white' />
          </View>
        </View> */}

    </SafeAreaView>
  )
};

const style = StyleSheet.create({
  mainHeader: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'purple',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },


  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 5,
    backgroundColor: 'purple',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})