import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ListView, Dimensions } from 'react-native';
import AppStyle from '../theme';
import mServer from '../networking/Server'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
export default class BookingScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storeSelected: null,
            mStores: []
        }
    }

    componentDidMount() {
        this._getStore();
    }
    _goBack = () => this.props.navigation.goBack();

    _getStore = () => {
        mServer.getStores().then((data) => {
            this.setState({
                mStores: data
            })
        })
    }
    _onSelectSalon = (store) => {
      //  this.setState({ storeSelected: store.name })
        this.props.navigation.navigate('PickTime', { store: store.address });
    }
    render() {
        return (
            <View style={AppStyle.StyleMain.fillMarginTop} >
                <View style={AppStyle.StyleMain.header}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#f59c94' }}> BOOKING </Text>
                    </View>
                    <TouchableOpacity
                        style={{ justifyContent: 'flex-start', paddingLeft: 10, position: 'absolute' }}
                        onPress={() => this._goBack()}>
                        <Image source={require('../../assets/Assets.xcassets/Navi/nav_back.imageset/back.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Select Salon</Text>
                </View>
                <View style={{ flex: 1, padding: 20 }}>
                    {this.state.mStores.map((store, i) => {
                        return (
                            <View
                                key={i}
                                style={{
                                    height: 50,
                                    margin: 10,
                                    backgroundColor: '#f59c94',
                                    justifyContent: 'center'
                                }}>
                                <TouchableOpacity
                                    style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 5 }}
                                    onPress={() => this._onSelectSalon(store)}
                                >
                                    <Text numberOfLines={1} style={{ color: 'white', fontSize: 18 }}>
                                        {store.address}
                                    </Text>
                                    <Text numberOfLines={1} style={{ color: 'white', fontSize: 16 }}>
                                        {store.name}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
}
