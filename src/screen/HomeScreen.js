
import React, { Component } from 'react';
import styles from '../styles';
import {
    Text, View, FlatList, TouchableOpacity, Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { getAllNewsFromServer, getProfile } from '../networking/Server';
import NewsItem from '../flatList/NewsItem';

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
        this._getProfile();
    }

    _getProfile = async () => {
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

        getProfile(Account).then((data) => {
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

    renderItem = ({ item }) => {
        return (
            <NewsItem item={item}
                onPressItem={() => { this._onPressItem(item) }} />
        );
    }
    onClickAvatar = () => {
    };

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ paddingLeft: 10, height: 50, backgroundColor: 'white' }}>
                    <Image style={styles.avatarCircle} source={{ uri: this.state.avatar }} />
                    <TouchableOpacity onPress={this.onClickAvatar}>
                        <Text>{this.state.phone}</Text></TouchableOpacity>
                </View>
                <FlatList style={{ flex: 1 }}
                    data={this.state.newsFromServer}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item._id}
                />

            </View>
        );
    }
}

