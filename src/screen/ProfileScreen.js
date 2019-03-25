import React, { Component } from 'react';
import styles from '../styles';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { getProfileFromServer } from '../networking/Server';
import Header from './CustomHeader'
// import { ScrollView } from 'react-native-gesture-handler';
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

  getProfile = async () => {
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
    getProfileFromServer(Account).then((data) => {
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
    this.getProfile();
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
      // <View style={styles.container}>
      //   <Header title="Account" color="#F06292" />
      //   <ScrollView style={{ flex: 1, width:'100%'}}>

      //     <View style={{ flex: 4, padding: 20 }}>
      //       <Image style={styles.avatarCircleB} source={{ uri: this.state.avatar }}></Image>
      //     </View>

      //     <View style={{ flex: 3, margin: 20 }}>
      //       <Text style={{ flex: 1, paddingLeft: 20 }}>{this.state.name}</Text>

      //       <Text style={{ flex: 1, paddingLeft: 20 }}>{this.state.email}</Text>
      //     </View>

      //     <TouchableOpacity style={styles.touchableProfile} >
      //       <View style={{ flexDirection: 'row' }}>
      //         <View style={{ flex: 1, alignItems: 'center' }}>
      //           <Icon name="md-qr-scanner" color="#777777" size={32} />
      //         </View>
      //         <Text style={styles.textTouchable} onPress={this._onPress} >Membership Code</Text>
      //       </View>
      //     </TouchableOpacity>

      //     <View style={{ paddingRight: 10, width: "100%", height: 1, backgroundColor: "#9E9E9E" }} />

      //     <TouchableOpacity style={styles.touchableProfile}>
      //       <View style={{ flexDirection: 'row' }}>
      //         <View style={{ flex: 1, alignItems: 'center' }}>
      //           <Icon name="md-information-circle" color="#777777" size={32} />
      //         </View>
      //         <Text style={styles.textTouchable} onPress={this._onPress} >Coupon</Text>
      //       </View>
      //     </TouchableOpacity>

      //     <View style={{ marginLeft: 10, marginRight: 10, width: "100%", height: 1, backgroundColor: "#9E9E9E" }} />

      //     <TouchableOpacity style={styles.touchableProfile}>
      //       <View style={{ flexDirection: 'row' }}>
      //         <View style={{ flex: 1, alignItems: 'center' }}>
      //           <Icon name="md-book" color="#777777" size={32} />
      //         </View>
      //         <Text style={styles.textTouchable} onPress={this._onPress} >History</Text>
      //       </View>
      //     </TouchableOpacity>

      //     <View style={{ marginLeft: 10, marginRight: 10, width: "100%", height: 1, backgroundColor: "#9E9E9E" }} />

      //     <TouchableOpacity style={styles.touchableProfile}>
      //       <View style={{ flexDirection: 'row' }}>
      //         <View style={{ flex: 1, alignItems: 'center' }}>
      //           <Icon name="md-happy" color="#777777" size={32} />
      //           {/* <Image style={{ flex: 1 }} source={require('../images/avatarGray32.png')} /> */}
      //         </View>
      //         <Text style={styles.textTouchable} onPress={this._onPress} >Combo</Text>
      //       </View>
      //     </TouchableOpacity>

      //     <View style={{ marginLeft: 10, marginRight: 10, width: "100%", height: 1, backgroundColor: "#9E9E9E" }} />

      //     <TouchableOpacity style={styles.touchableProfile}>
      //       <View style={{ flexDirection: 'row' }}>
      //         <View style={{ flex: 1, alignItems: 'center' }}>
      //           <Icon name="md-hand" color="#777777" size={32} />
      //         </View>
      //         <Text style={styles.textTouchable} onPress={this._onPress} >Term Polocy</Text>
      //       </View>
      //     </TouchableOpacity>

      //     <View style={{ marginLeft: 10, marginRight: 10, width: "100%", height: 1, backgroundColor: "#9E9E9E" }} />

      //     <TouchableOpacity style={styles.touchableProfile}>
      //       <View style={{ flexDirection: 'row' }}>
      //         <View style={{ flex: 1, alignItems: 'center' }}>
      //           <Icon name="md-log-out" color="#777777" size={32} />
      //         </View>
      //         <Text style={styles.textLogout} onPress={this._onPressLogOut} >Logout</Text>
      //       </View>
      //     </TouchableOpacity>

      //   </ScrollView>
      // </View>



      <View style={{ flex: 1 }}>
        <Header title="Notification" color="#F06292" />
        <View style={styles.containerTopProfile}>
          <View style={{ flex: 2 }}>
            <Image style={styles.avatarCircleB} source={{ uri: this.state.avatar }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text>
              {this.state.name}
            </Text>
            <Text>
              {this.state.email}
            </Text>
          </View>
        </View>
        <View style={styles.containerBottomProfile}>

          <TouchableOpacity style={styles.touchableProfile} >
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Icon name="md-qr-scanner" color="#777777" size={32} />
              </View>
              <Text style={styles.textTouchable} onPress={this._onPress} >Membership Code</Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginLeft: 10, marginRight: 10, height: 1, backgroundColor: "#9E9E9E" }} />

          <TouchableOpacity style={styles.touchableProfile}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Icon name="md-information-circle" color="#777777" size={32} />
              </View>
              <Text style={styles.textTouchable} onPress={this._onPress} >Coupon</Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginLeft: 10, marginRight: 10, height: 1, backgroundColor: "#9E9E9E" }} />

          <TouchableOpacity style={styles.touchableProfile}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Icon name="md-book" color="#777777" size={32} />
              </View>
              <Text style={styles.textTouchable} onPress={this._onPress} >History</Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginLeft: 10, marginRight: 10, height: 1, backgroundColor: "#9E9E9E" }} />

          <TouchableOpacity style={styles.touchableProfile}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Icon name="md-happy" color="#777777" size={32} />
                {/* <Image style={{ flex: 1 }} source={require('../images/avatarGray32.png')} /> */}
              </View>
              <Text style={styles.textTouchable} onPress={this._onPress} >Combo</Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginLeft: 10, marginRight: 10, height: 1, backgroundColor: "#9E9E9E" }} />

          <TouchableOpacity style={styles.touchableProfile}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Icon name="md-hand" color="#777777" size={32} />
              </View>
              <Text style={styles.textTouchable} onPress={this._onPress} >Term Polocy</Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginLeft: 10, marginRight: 10, height: 1, backgroundColor: "#9E9E9E" }} />

          <TouchableOpacity style={styles.touchableProfile}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Icon name="md-log-out" color="#777777" size={32} />
              </View>
              <Text style={styles.textLogout} onPress={this._onPressLogOut} >Logout</Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginLeft: 10, marginRight: 10, height: 1, backgroundColor: "#9E9E9E" }} />
        </View>
      </View>

    );
  }
}