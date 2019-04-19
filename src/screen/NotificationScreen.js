import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import AppStyle from '../theme'

export default class NotificationScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={AppStyle.StyleMain.centerContainer}>
                <Image source={require('../../assets/Assets.xcassets/empty.imageset/empty.png')} />
            </View>
        );
    }
}