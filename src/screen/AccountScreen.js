import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import AppStyle from '../theme'
import { ScrollView } from 'react-native-gesture-handler';
import mServer from '../networking/Server';


export default class AccountScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mUser: null,
            mPass: null,
            mName: null,
            mAvatar: null,
            isVip: null
        }
    }


    componentDidMount() {
        this._getProfile()
    }


    _getProfile = async () => {
        await AsyncStorage.multiGet(['@UserName:key', '@Password:key']).then(response => {
            //console.log(response)
            this.setState({
                mUser: response[0][1],
                mPass: response[1][1]
            })
        });

        const account = {
            username: this.state.mUser,
            password: this.state.mPass
        };

        mServer.login(account).then((data) => {
            // console.log(data)
            this.setState({
                mName: data.user.name,
                mAvatar: data.user.avatar,
                isVip: data.user.isVIP

            });
        }).catch((error) => {
            console.log("Account Screen : Error getProfile " + error)
        });
    }

    _onLogout = () => {
        const { navigation } = this.props;
        AsyncStorage.multiRemove(['@AccessToken:key', '@UserName:key', '@Password:key'], (err) => {
            console.log('Local storage user info removed!');
            navigation.navigate('InputUser');
        })
    }

    _showMember() {
        if (this.state.isVip) {
            return <Text style={{ margin: 5, color: '#BDBDBD' }} >VIP</Text>;
        }
        return <Text style={{ margin: 5, color: '#BDBDBD' }} >Basic member</Text>;
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>

                <View style={{ flex: 1, marginTop: 4, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'column', padding: 20, margin: 10, backgroundColor: '#white' }}>
                        <Image style={{ width: 100, height: 100, borderRadius: 50, }} source={{ uri: this.state.mAvatar }} />
                        <Text style={{ fontSize: 20 }}>YOUR NAME</Text>
                        {this._showMember()}
                    </View>
                    <View style={{ flex: 2, marginTop: 10, flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
                        <TouchableOpacity style={AppStyle.StyleCommon.accTouch}>
                            <Text style={AppStyle.StyleCommon.accTextTouch}>Membership Code</Text>
                        </TouchableOpacity>
                        <View style={AppStyle.StyleMain.line} />
                        <TouchableOpacity style={AppStyle.StyleCommon.accTouch}>
                            <Text style={AppStyle.StyleCommon.accTextTouch}>Coupon</Text>
                        </TouchableOpacity>
                        <View style={AppStyle.StyleMain.line} />
                        <TouchableOpacity style={AppStyle.StyleCommon.accTouch}>
                            <Text style={AppStyle.StyleCommon.accTextTouch}>History</Text>
                        </TouchableOpacity>
                        <View style={AppStyle.StyleMain.line} />
                        <TouchableOpacity style={AppStyle.StyleCommon.accTouch}>
                            <Text style={AppStyle.StyleCommon.accTextTouch}>Combo</Text>
                        </TouchableOpacity>
                        <View style={AppStyle.StyleMain.line} />
                        <TouchableOpacity style={AppStyle.StyleCommon.accTouch}>
                            <Text style={AppStyle.StyleCommon.accTextTouch}>Term & Policy</Text>
                        </TouchableOpacity>
                        <View style={AppStyle.StyleMain.line} />
                        <TouchableOpacity
                            style={AppStyle.StyleCommon.accTouch}
                            onPress={() => this._onLogout()}>
                            <Text style={{ fontSize: 18, color: '#E91E63' }}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

        );
    }
}