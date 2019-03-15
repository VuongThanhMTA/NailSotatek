import React, { Component } from 'react';
import styles from '../styles';
import {
    Text, View, TextInput, TouchableOpacity, Alert, ImageBackground, Image
} from 'react-native';
import imageBG from '../images/nailbg.jpg';
import Icon from 'react-native-ionicons'
import { register } from '../networking/Server';


export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            Name: "",
            Pass: "",
            showPass: true,
            isPress: false,

        })
    }

    onInputName = (text) => {
        this.setState({ Name: text })
    }

    onInputPass = (text) => {
        this.setState({ Pass: text })
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
    onRegister = () => {
        const { navigation } = this.props;

        console.log("User register : ", this.state.Name)
        console.log("Pass register : ", this.state.Pass)

        const Account = {
            username: this.state.Name,
            password: this.state.Pass
        };

        register(Account).then((result) => {
            console.log("register : ", result)
            if (result === 0) {
                navigation.navigate('UserName');
            } else if (result === 9999) {
                Alert.alert("999", "User exists")
                console.log("User exists" + error)
            }
        }).catch((error) => {
            //  this.setState({ mProfile: null });
            console.log("Error register " + error)
        });
    }

    render() {
        return (
            <ImageBackground source={imageBG} style={styles.backgroundContainer}>
                <View style={styles.inputContainer}>
                    <Icon name="md-person" size={28} color={'rgba(255,255,255,0.7)'} style={styles.iconInput} />
                    <TextInput
                        onChangeText={this.onInputName}
                        value={this.state.Name}
                        style={styles.inputBox}
                        placeholder="User name">
                    </TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="md-lock" size={28} color={'rgba(255,255,255,0.7)'} style={styles.iconInput} />
                    <TextInput

                        // value={this.state.Password}
                        onChangeText={this.onInputPass}
                        style={styles.inputBox}
                        placeholder="Password"
                        secureTextEntry={this.state.showPass}>
                    </TextInput>
                    <TouchableOpacity style={styles.iconEye} onPress={this.onShowPass}>
                        <Image source={this.state.isPress == false ? require('../images/eyeBlack24.png') : require('../images/eyeOffBlack24.png')} />
                        {/* <Text>eye</Text> */}
                        {/* <Icon style={styles.iconInput} name={this.state.isPress == false ? "md-eye" : "md-eye-off"} color="#FFFFFF" size={22} /> */}
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.onRegister} >Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}