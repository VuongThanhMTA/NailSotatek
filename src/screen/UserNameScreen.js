import React, { Component } from 'react';
import styles from '../styles';
import {
  Text, View, TextInput,
  TouchableOpacity, ImageBackground
} from 'react-native';
import imageBG from '../images/nailbg.jpg';
import { checkIfAccExists } from '../networking/Server';
import Icon from 'react-native-ionicons'


export default class UserNameScreen extends Component {

  constructor(props) {
    super(props);
  }
  // các biến đặt tên : chữ cái đầu thường : mVar
  // các funtion private nên gạch dưới _onNext
  _onNext = () => {
    const { navigation } = this.props;
    const userName = { username: this.text._lastNativeText };

    checkIfAccExists(userName).then((data) => {
       console.log(data)
      console.log(userName.username)
      if (data.exists === true) {
        console.log(" exists : true")
        navigation.navigate('Password', { user: userName.username });
      } else {
        console.log("exists : false")
        navigation.navigate('Register');
      }
    });

  }

  render() {
    return (
      <ImageBackground source={imageBG} style={styles.backgroundContainer}>
        <View style={styles.inputContainer}>
          <Icon style={styles.iconInput} name="md-person" color="#455A64" size={22} />
          <TextInput
            ref={(com) => { this.text = com; }}
            style={styles.inputBox}
            placeholder="User name"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.button} onPress={this._onNext}>
            <Text style={styles.buttonText} >Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    );
  }
}