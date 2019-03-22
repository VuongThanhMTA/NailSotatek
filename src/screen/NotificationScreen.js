import React, { Component } from 'react';
import styles from '../styles';
import { Text, View,Image } from 'react-native';

export default class NotificationScreen extends Component {
  render() {
    return (
      <View style={styles.backgroundContainer}>
          <Image source={require("../images/empty/empty.png")}>
          </Image>
      </View>
    );
  }
}