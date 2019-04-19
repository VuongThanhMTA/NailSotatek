import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import AppStyle from '../theme';

export default class MemershipScreen extends Component {
    constructor(props) {
        super(props)
    }
    _goBack = () => this.props.navigation.goBack();

    render() {
        return (
            <View style={AppStyle.StyleMain.fillMarginTop}>
                <View style={AppStyle.StyleMain.header}>
                    <TouchableOpacity
                        style={{ justifyContent: 'flex-start', paddingLeft: 10 }}
                        onPress={() => this._goBack()}
                    >
                        <Image source={require('../../assets/Assets.xcassets/Navi/nav_back.imageset/back.png')} />
                    </TouchableOpacity>
                </View>
                <View style={AppStyle.StyleMain.centerContainer}>
                    <Text style={{ fontSize: 20 }}>YOUR NAME</Text>
                    <Text style={{ fontSize: 16, color: '#BDBDBD' }}>Basic member</Text>
                    <Image style={{ width: 200, height: 200 }} source={require('../../assets/Assets.xcassets/ic_qr_code.imageset/qr_code_620x620.png')} />
                </View>
            </View>
        );
    }
}
