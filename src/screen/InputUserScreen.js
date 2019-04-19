import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import AppStyle from '../theme';
import mServer from '../networking/Server';

export default class InputUserScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mUserName: null,
        }
    }
    _onInputUser = () => {
        if (this.state.mUserName) {
            const { navigation } = this.props;
            const userName = { username: this.state.mUserName };
            mServer.checkIfAccExists(userName).then((data) => {
                console.log("Check if account exists " + data.exists);
                if (data.exists === true) {
                    navigation.navigate('InputPass', { user: userName.username })
                } else {
                    navigation.navigate('Register');
                }
            })
        }

    }

    render() {
        return (
            <View style={AppStyle.StyleMain.centerContainer}>
                <KeyboardAvoidingView style={AppStyle.StyleMain.centerContainer} behavior="padding">
                    <Image style={{ marginBottom: 30 }} source={require('../../assets/Assets.xcassets/ic_app.imageset/ic_app.png')} />
                    <TextInput
                        style={AppStyle.StyleCommon.inputUser}
                        placeholder="User name"
                        onChangeText={(text) => this.setState({ mUserName: text })}>
                    </TextInput>
                    <TouchableOpacity style={AppStyle.StyleCommon.buttonNext} onPress={() => this._onInputUser()}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: 'orange' }}>Next</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}