import React, { Component } from 'react';
import styles from '../styles';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { getProfile } from '../networking/Server';
export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      mUser: null,
      mPass: null,
      _id: null,
      email: null,
      phone: null,
      name: null,
      avatar: null,
      role: null,
      created: null,
      __v: null,
      isVIP: null,

    })
  }

  _getProfile = async () => {
    await AsyncStorage.multiGet(['@UserName:key', '@Password:key']).then(response => {
      this.setState({
        mUser: response[0][1],
        mPass: response[1][1]
      })
    });
    const Account = {
      username: this.state.mUser,
      password: this.state.mPass
    };
    getProfile(Account).then((data) => {
      console.log(data.user)
      this.setState({
        phone: data.user.phone,
        avatar: data.user.avatar,
        _id: data.user._id,
        email: data.user.email,
        name: data.user.name,
        role: data.user.role,
        created: data.user.created,
        __v: data.user.__v,
        isVIP: data.user.isVIP,
      });
    }).catch((error) => {
      console.log("Profile Screen : Error getProfile  " + error)
    });
  }

  componentDidMount() {
    this._getProfile();
  }

  _onPress = () => {
    console.log("ProfileScreen click : ")
  }
  _onPressLogOut = () => {
    const { navigation } = this.props;
    AsyncStorage.multiRemove(['@AccessToken:key', '@UserName:key', '@Password:key'], (err) => {
      console.log('Local storage user info removed!');
      navigation.navigate('UserName');
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, padding: 20, backgroundColor: "#ff5252", alignItems: "center", justifyContent: "center" }}>
          <View style={{ flex: 3 }}>
            <Image style={styles.avatarCircleB} source={{ uri: this.state.avatar }} />
          </View>
          <View style={styles.textProfile}>
            <Text>
              {this.state.email}
            </Text>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <View style={styles.textProfile}>
            <TouchableOpacity >
              <Text style={{ fontSize: 14, paddingLeft: 10 }} onPress={this._onPress} >Thong bao</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: "#9E9E9E" }} />
          <View style={styles.textProfile}>
            <Image source={require('../images/informationGray32.png')} />
            <TouchableOpacity >
              <Text style={{ fontSize: 14, paddingLeft: 10 }} onPress={this._onPress} >Thong tin tai khoan</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: "#9E9E9E" }} />
          <View style={styles.textProfile}>
            <TouchableOpacity >
              <Text style={{ fontSize: 14, paddingLeft: 10 }} onPress={this._onPress} >Thay doi mat khau</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: "#9E9E9E" }} />
          <View style={styles.textProfile}>
            <TouchableOpacity >
              <Text onPress={this._onPress} >Thay anh dai dien</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: "#9E9E9E" }} />
          <View style={styles.textProfile}>
            <TouchableOpacity >
              <Text onPress={this._onPress} >Ho tro khach hang</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: "#9E9E9E" }} />
          <View style={styles.textProfile}>
            <TouchableOpacity >
              <Text onPress={this._onPressLogOut} >Dang xuat</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: "#9E9E9E" }} />
        </View>
      </View>
    );
  }
}