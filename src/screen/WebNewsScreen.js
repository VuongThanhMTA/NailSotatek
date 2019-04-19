import React, { Component } from 'react';
import { WebView, View, Text, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import AppStyle from '../theme'


export default class WebNewsScreen extends Component {

  constructor(props) {
    super(props)
  }
  _goBack = () => this.props.navigation.goBack();

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, flexDirection: 'column', marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
        <View style={AppStyle.StyleMain.header}>
          <TouchableOpacity
            style={{ justifyContent: 'flex-start', paddingLeft: 10 }}
            onPress={() => this._goBack()}>
            <Image source={require('../../assets/Assets.xcassets/Web/ic_back_web.imageset/ic_back.png')} />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: '#F06292', textAlign: 'center' }}>Nail Everly 29</Text>
          </View>
        </View>
        <WebView
          source={{ uri: navigation.state.params.item.url }}
          style={{ flex: 1, marginTop: 20 }}
        />
      </View>
    );
  }
}