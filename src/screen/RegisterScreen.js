import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import AppStyle from '../theme';
import mServer from '../networking/Server';
export default class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mUser: null,
            mPass: null,
            mToken: null
        }
    }

    _inputUser = (text) => this.setState({ mUser: text })

    _inputPass = (text) => this.setState({ mPass: text })

    _onRegister = () => {

        const account = {
            userName: this.state.mUser,
            pass: this.state.mPass
        }
        mServer.register(account).then((result) => {
            if (result === 0) {
                navigation.navigate('InputUser');
            } else if (result === 9999) {
                Alert.alert("999", "User exists or error")
              //  console.log("User exists" + error)
            }

        });
    }

    render() {
        return (
            <View style={AppStyle.StyleMain.centerContainer}>
                <KeyboardAvoidingView style={AppStyle.StyleMain.centerContainer} behavior="padding">
                    <Image style={{ marginBottom: 30 }} source={require('../../assets/Assets.xcassets/ic_app.imageset/ic_app.png')} />

                    <TextInput
                        style={AppStyle.StyleCommon.inputRegister}
                        onChangeText={() => this._inputUser()}
                        placeholder="User name" />

                    <TextInput
                        style={AppStyle.StyleCommon.inputRegister}
                        onChangeText={() => this._inputPass()}
                        placeholder="Passwword" />

                    <TouchableOpacity style={AppStyle.StyleCommon.buttonNext} onPress={() => this._onRegister()}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'orange' }}>Register</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}