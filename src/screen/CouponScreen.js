import React, { Component } from 'react';
import { View, Image, Text,TouchableOpacity } from 'react-native';
import AppStyle from '../theme';

export default class CouponScreen extends Component {
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
                        onPress={() => this._goBack()}>
                        <Image source={require('../../assets/Assets.xcassets/Navi/nav_back.imageset/back.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
