import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppStyle from '../theme'

export default class BookingCompleteScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mBooking: this.props.navigation.state.params.booking
        }
    }
    _goBack = () => this.props.navigation.goBack();
    render() {
        return (
            <View style={AppStyle.StyleMain.fillMarginTop}>
                <View style={AppStyle.StyleMain.header}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#f59c94' }}> BOOKING </Text>
                    </View>
                    <TouchableOpacity
                        style={{ justifyContent: 'flex-start', paddingLeft: 10, position: 'absolute' }}
                        onPress={() => this._goBack()}>
                        <Image source={require('../../assets/Assets.xcassets/Navi/nav_back.imageset/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={AppStyle.StyleMain.centerContainer}>
                    <Text >{this.state.mBooking.storeAddress}</Text>
                    <Text >{this.state.mBooking.hour}</Text>
                    <Text >{this.state.mBooking.date}</Text>

                </View>
            </View>
        );
    }
}