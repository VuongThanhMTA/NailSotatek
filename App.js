import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputUserScreen from './src/screen/InputUserScreen';
import HomeScreen from './src/screen/HomeScreen';
import AppContainer from './src/navigators/AppContainer';
import { Provider } from 'react-redux';
import store from './src/global/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
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
