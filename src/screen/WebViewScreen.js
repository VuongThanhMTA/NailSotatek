import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class MyWebScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { navigation } = this.props;
    return (
      <WebView
        source={{ uri: this.props.navigation.state.params.item.url}}
        style={{ marginTop: 20 }}
      />
    );
  }
}