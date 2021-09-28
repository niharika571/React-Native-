import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Calendar  from './components/Calendar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' backgroundColor="#528593"/>
      <Calendar> 
      </Calendar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '',
  },
});
