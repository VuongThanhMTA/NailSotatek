import React, { Component } from 'react';
import { View, Text, StatusBar, Platform ,ActivityIndicator,AsyncStorage} from 'react-native';
import AppStyle from '../theme'

export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this.bootStrapAsync();
    }

    bootStrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('@AccessToken:key');
        this.props.navigation.navigate(userToken ? 'Home' : 'Auth');
    };

    render() {
        return (
            <View style={AppStyle.StyleMain.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}