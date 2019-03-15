import React, { Component } from 'react';
import { Text, View, TextInput, Alert, TouchableOpacity, ImageBackground, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../styles';
import { login } from '../networking/Server';
import imageBG from '../images/nailbg.jpg';
import Icon from 'react-native-ionicons'
export default class PasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            mUserName: this.props.navigation.state.params.user,
            mPassword: null,
            mAccessToken: null,
            showPass: true,
            isPress: false
        })
    }

    inputPass = (text) => {
        this.setState({
            mPassword: text
        })
    }

    onShowPass = () => {
        if (this.state.isPress == false) {
            console.log(" eye : false");
            this.setState({ showPass: false, isPress: true })
        } else {
            console.log(" eye : true");
            this.setState({ showPass: true, isPress: false })
        }
    }

    signInAsync = async () => {
        console.log("Password screen AsyncStorage: " + this.state.mAccessToken);
        console.log("Password screen AsyncStorage : " + this.state.mUserName);
        console.log("Password screen AsyncStorage : " + this.state.mPassword);
        try {
            await AsyncStorage.setItem('@AccessToken:key', 'this.state.accessToken');
            await AsyncStorage.setItem('@UserName:key', this.state.mUserName);
            await AsyncStorage.setItem('@Password:key', this.state.mPassword);
            console.log("Password screen AsyncStorage Saved !!");
        } catch (error) {
            console.log("Password screen error AsyncStorage " + error);
        }

    };

    onLogin = () => {
        const { navigation } = this.props;

        const Account = {
            username: this.state.mUserName,
            password: this.state.mPassword
        };

        login(Account).then((data) => {

            console.log("Password screen OnLogin : " + Account.username);
            console.log("Password screen OnLogin : " + Account.password);
            if (data != null) {
                // console.log(data);
                this.setState({
                    mAccessToken: data.accessToken
                })

                //  this.storeData();
                this.signInAsync();
                navigation.navigate('Home', { Acc: Account });
            } else {
                console.log("Code : 999");
                Alert.alert("Password ???");
            }
        });

    }

    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground source={imageBG} style={styles.backgroundContainer}>
                <View style={styles.inputContainer}>
                    <Icon style={styles.iconInput} name="md-person" color="#455A64" size={22} />
                    <TextInput style={styles.inputBox}>{navigation.state.params.user}</TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Icon style={styles.iconInput} name="md-lock" color="#455A64" size={22} />
                    <TextInput
                        onChangeText={this.inputPass}
                        style={styles.inputBox}
                        secureTextEntry={this.state.showPass}
                        placeholder="Password">
                    </TextInput>
                    <TouchableOpacity style={styles.iconEye} onPress={this.onShowPass}>
                        <Image source={this.state.isPress == false ? require('../images/eyeBlack24.png') : require('../images/eyeOffBlack24.png')} />
                        {/* <Text>eye</Text> */}
                        {/* <Icon style={styles.iconInput} name={this.state.isPress == false ? "md-eye" : "md-eye-off"} color="#FFFFFF" size={22} /> */}
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.onLogin} >Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        );
    }
}
