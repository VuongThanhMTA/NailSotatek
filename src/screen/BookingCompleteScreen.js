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
                    <Text >{this.state.mBooking.add}</Text>
                    <Text >{this.state.mBooking.time}</Text>
                    <Text >{this.state.mBooking.day}</Text>

                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 20 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={{ width: 100, height: 50, borderRadius: 32, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}