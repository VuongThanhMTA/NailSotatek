import React from 'react';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, AsyncStorage, Animated, Easing } from 'react-native';
import AppStyle from '../theme';
import ItemNews from '../components/ItemNews';
import mServer from '../networking/Server';

export default class NewsScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sildeAnim1: new Animated.Value(0),
            sildeAnim2: new Animated.Value(-700),

            newsFromServer: [],
            mUser: null,
            mPass: null,
            name: null,
            avatar: null,
            isVip: false
        }
    }

    componentDidMount() {
        this._refreshDataFromServer();

       // setTimeout(() => {
            this._getProfile();
       // }, 500);

        const anim1 = Animated.timing(
            this.state.sildeAnim1,
            {
                toValue: 1,
                duration: 1000,
               
            });
        const anim2 = Animated.timing(
            this.state.sildeAnim2,
            {
                toValue: 0,
                duration: 2000,
                easing: Easing.bounce
            });

        Animated.parallel([anim1, anim2]).start();

    }

    _refreshDataFromServer = () => {
        mServer.getAllNewsFromServer().then((news) => {
            this.setState({ newsFromServer: news });
        }).catch((error) => {
            this.setState({ newsFromServer: [] });
            console.log("News Screen : Error refreshDataFromServer")
        });
    }

    _getProfile = async () => {
        await AsyncStorage.multiGet(['@UserName:key', '@Password:key']).then(response => {
          //  console.log(response)
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
         //   console.log(data)
            this.setState({
                name: data.user.name,
                avatar: data.user.avatar,
                isVip: data.user.isVIP

            });
        }).catch((error) => {
            console.log("News Screen : Error getProfile " + error)
        });
    }




    _showMember() {
        if (this.state.isVip) {
            return <Text style={{ margin: 5, color: '#BDBDBD' }} >VIP</Text>;
        }
        return <Text style={{ margin: 5, color: '#BDBDBD' }} >Basic member</Text>;
    }



    _onPressItem = (item) => {
        const { navigation } = this.props;
        navigation.navigate('Web', { item });
    };

    _renderItem = ({ item }) => {
        return (
            <ItemNews item={item}
                onPressItem={() => { this._onPressItem(item) }} />
        );
    }

    _onPressBooking = () => {
        this.props.navigation.navigate('Book');
    }

    _onPressMemership = () => {
        this.props.navigation.navigate('Mem');
    }
    _onPressCoupon = () => {
        this.props.navigation.navigate('Coupon');
    }

    render() {
        const opacity = this.state.sildeAnim1;
        const marginBottom = this.state.sildeAnim2
        return (
            <View style={AppStyle.StyleMain.centerContainer}>

                <View style={AppStyle.StyleCommon.memberContainer}>
                    <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: this.state.avatar }} />
                    <View style={{ flexDirection: 'column', justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ margin: 5, textTransform: 'capitalize' }}>{this.state.name ? this.state.nam.toUpperCase() : "YOUR NAME"}</Text>
                        {this._showMember()}
                    </View>
                </View>
                <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
                    <Animated.View style={{ height: 80, width: '100%', flexDirection: 'row', alignItems: 'center', opacity }}>
                        <TouchableOpacity
                            style={AppStyle.StyleCommon.buttonBooking}
                            onPress={() => this._onPressBooking()}>
                            <Image style={{ margin: 5 }} source={require('../../assets/Assets.xcassets/ic_book.imageset/calendar.png')} />
                            <Text >Booking</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={AppStyle.StyleCommon.buttonBooking}
                            onPress={() => this._onPressMemership()}>
                            <Image style={{ margin: 5 }} source={require('../../assets/Assets.xcassets/ic_qr_code.imageset/qr_code.png')} />
                            <Text >Memership</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={AppStyle.StyleCommon.buttonBooking}
                            onPress={() => this._onPressCoupon()}>
                            <Image style={{ margin: 5 }} source={require('../../assets/Assets.xcassets/ic_coupon.imageset/coupon.png')} />
                            <Text >Coupon</Text>
                        </TouchableOpacity>

                    </Animated.View>
                    <Animated.View style={{ flex: 1, marginBottom }}>
                        <FlatList style={{ flex: 1 }}
                            data={this.state.newsFromServer}
                            renderItem={this._renderItem}
                            keyExtractor={(item) => item._id}
                        />
                    </Animated.View>

                </ScrollView>
            </View>
        );
    }
}