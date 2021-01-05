// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import dummyData from '../../../dummyData'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; // Black crossed out ghost

export default function AddBook ({navigation}) {
  const[text, setText] = useState('');
  const [books, setBooks] = useState(dummyData);

  const onChange = textValue => setText(textValue);

  const addBook = (title) => {
    if (!title) {
      Alert.alert('Error', 'Please enter a book', {text: 'Ok'});
    } else {
      setBooks(books => {
        return [{text: title}, ...books];
      });
    };
  };

  return (
    <SafeAreaView >
      <View style={style.header}>
        <FontAwesome5 name="book" size={24} color="black" />
        <Text style={style.text}>Add Books</Text>
      </View>
      <View>

        <Calendar
          // Specify style for calendar container element. Default = {}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            height: 350
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'purple',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'purple',
            indicatorColor: 'blue',
            // textDayFontFamily: 'helvetica',
            // textMonthFontFamily: 'helvetica',
            // textDayHeaderFontFamily: 'helvetica',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          // // Initially visible month. Default = Date()
          // current={''}
          // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2021-01-05'}
          // minDate={''}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2030-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={(direction) => (<Arrow/>)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Show week numbers to the left. Default = false
          // showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        //   // Disable left arrow. Default = false
        //   disableArrowLeft={false}
        //   // Disable right arrow. Default = false
        //   disableArrowRight={false}
        //   // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        //   disableAllTouchEventsForDisabledDays={true}
        //   // Replace default month and year title with custom one. the function receive a date as parameter.
        //   renderHeader={(date) => {/*Return JSX*/}}
        //   // Enable the option to swipe between months. Default = false
        //   enableSwipeMonths={true}
        />
      </View>
      <View>

      <TextInput
        placeholder='Add book title...'
        style={style.input}
        onChangeText={onChange}
      />
      <TextInput
        placeholder='Add number of pages...'
        style={style.input}
        onChangeText={onChange}
      />

      <TouchableOpacity style={style.btn} onPress={() => addBook(text)}>
        <Text style={style.btnText}>
          <MaterialIcons name="library-add" size={24} color="black" />
        </Text>
      </TouchableOpacity>
</View>

<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Home')}>
    <View style={style.btnContainer}>
      <Text>Return to Profile</Text>
    </View>
  </TouchableOpacity>
    </SafeAreaView>
  );
}
// style={style.title}>{title}

const style = StyleSheet.create({
  header: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'purple',
    alignItems: 'center',

  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 2,


    // textAlign: 'center',
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 14,
    borderColor: 'white',
    borderWidth: 3,
  },
    btn: {
    backgroundColor: 'lightgreen',
    padding: 9,
    margin: 5,
  },
    btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  btnContainer: {
    backgroundColor: 'lightgreen',
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});