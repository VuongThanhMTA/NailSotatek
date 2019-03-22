import React, { Component } from 'react';
import styles from '../styles';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
export default class StoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}>

        </MapView>
      </View>
    );
  }
}