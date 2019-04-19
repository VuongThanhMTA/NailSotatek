import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView, AsyncStorage, Alert } from 'react-native';
import AppStyle from '../theme';
import mServer from '../networking/Server';

export default class InputPasswordScreen extends Component {
    constructor(props) {
        super(props),
            this.state = {
                mUserName: this.props.navigation.state.params.user,
                mPass: null,
                mToken: null,
            }
    }

    _onInputPass = (text) => {
        this.setState({ mPass: text })
    }
    _isInput = () => {
        if (this.state.mPass != null && this.state.mPass != null) {
            return true;
        }
        return false;
    }
    _onLogin = () => {

        if (this._isInput()) {
            const account = {
                username: this.state.mUserName,
                password: this.state.mPass

            }
            console.log('user: ' + account.username)
            console.log('user: ' + account.password)
            mServer.login(account).then((data) => {
                console.log('user: ' + data)
                if (data != null) {
                    this.setState({ mToken: data.accessToken })
                    this._saveAccessToken();
                    this.props.navigation.navigate('Home', { Acc: account });
                } else {
                    Alert.alert("Password incorrect !!!");
                }
            })
        }
    }



    _saveAccessToken = async () => {
        try {
            await AsyncStorage.setItem('@AccessToken:key', this.state.mToken);
            await AsyncStorage.setItem('@UserName:key', this.state.mUserName);
            await AsyncStorage.setItem('@Password:key', this.state.mPass);
            console.log("Login : AsyncStorage Saved !!");
        } catch (error) {
            console.log("Login : error AsyncStorage " + error);
        }

    };
    render() {
        return (
            <View style={AppStyle.StyleMain.centerContainer}>
                <KeyboardAvoidingView style={AppStyle.StyleMain.centerContainer} behavior="padding">
                    <Image style={{ marginBottom: 30 }} source={require('../../assets/Assets.xcassets/ic_app.imageset/ic_app.png')} />
                    <TextInput
                        style={AppStyle.StyleCommon.inputUser}
                        onChangeText={(text) => this._onInputPass(text)}
                        placeholder="Password">
                    </TextInput>
                    <TouchableOpacity style={AppStyle.StyleCommon.buttonNext} onPress={() => this._onLogin()}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'orange' }}>Login</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View >
        );
    }
}