
import React, { Component } from 'react';
import styles from '../styles';
import {
    Text, View, FlatList, TouchableOpacity, Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { getAllNewsFromServer, getProfileFromServer } from '../networking/Server';
import NewsItem from '../flatList/NewsItem';
import Header from './CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newsFromServer: [],
            mUser: null,
            mPass: null,
        })
    }

    componentDidMount() {
        this.refreshDataFromServer();
        this.getProfile();
    }

    getProfile = async () => {
        await AsyncStorage.multiGet(['@UserName:key', '@Password:key']).then(response => {
            console.log(response)
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
            this.setState({
                phone: data.user.phone,
                avatar: data.user.avatar
            });
        }).catch((error) => {
            console.log("Home Screen : Error getProfile " + error)
        });
    }

    refreshDataFromServer = () => {
        getAllNewsFromServer().then((news) => {
            this.setState({ newsFromServer: news });
        }).catch((error) => {
            this.setState({ newsFromServer: [] });
            console.log("Home Screen : Error refreshDataFromServer")
        });
    }

    _onPressItem = (item) => {
        const { navigation } = this.props;
        navigation.navigate('WebView', { item });
    };
    onClickAvatar = () => {
    };

    renderItem = ({ item }) => {
        return (
            <NewsItem item={item}
                onPressItem={() => { this._onPressItem(item) }} />
        );
    }

    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Header title="Home" color="#8BC34A" />
                <View style={{ flexDirection: 'row', paddingLeft: 10, height: 50, backgroundColor: 'white' }}>
                    <Image style={styles.avatarCircle} source={{ uri: this.state.avatar }} />
                    <TouchableOpacity style={{ paddingLeft: 10 }} onPress={this.onClickAvatar}>
                        <Text >Name</Text>
                        <Text >Membership</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container3Btn}>
                        <TouchableOpacity style={styles.buttonBooking}>
                            <Image  source={require("../images/ic_book/calendar2x.png")}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonBooking}>
                            <Image  source={require("../images/ic_coupon/coupon2x.png")}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonBooking}>
                            <Image  source={require("../images/ic_qr_code/qr-code2x.png")}></Image>
                        </TouchableOpacity>

                    </View>
                    <FlatList style={{ flex: 1 }}
                        data={this.state.newsFromServer}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item._id}
                    />
                </ScrollView>

            </View>
        );
    }
}

