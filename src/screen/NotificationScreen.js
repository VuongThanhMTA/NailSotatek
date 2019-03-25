import React, { Component } from 'react';
import styles from '../styles';
import { Text, View, Image } from 'react-native';
import Header from './CustomHeader'
export default class NotificationScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header title="Notification" color="#2196F3" />
        <View style={styles.backgroundContainer}>
          <Image source={require("../images/empty/empty.png")} />
        </View>

      </View>
    );
  }
}