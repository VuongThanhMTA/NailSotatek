import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputUserScreen from './src/screen/InputUserScreen';
import HomeScreen from './src/screen/HomeScreen';
import AppContainer from './src/navigators/AppContainer';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
