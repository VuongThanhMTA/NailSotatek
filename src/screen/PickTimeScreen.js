import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ListView, Dimensions } from 'react-native';
import AppStyle from '../theme';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export default class PickTimeScreen extends Component {

    constructor(props) {
        super(props)

        data = [];
        for (let i = 9; i < 20; i++) {
            data.push(`${i}:00`);
            data.push(`${i}:30`);
        }
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        const date = new Date().getDate()
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear();
        // console.log(new Date())
        // const time = new Date().get
        this.state = {
            mStoreAddress: this.props.navigation.state.params.store,
            indexPickDate: 0,
            hourPicked: '9:00',
            dataSource: ds.cloneWithRows(data),

            routers: [
                { key: 'today', title: 'Today', time: `${date}/${month}/${year}` },
                { key: 'tomorrow', title: 'Tomorrow', time: `${date + 1}/${month}/${year}` },
                { key: 'aftertomorrow', title: 'After tomorrow', time: `${date + 2}/${month}/${year}` }
            ]
        }
    }

    _goBack = () => this.props.navigation.goBack();

    _renderRow = (data) => {
        return (
            <TouchableOpacity
                onPress={() => this._onPickHour(data)}
                style={[AppStyle.StyleCommon.boxPickHour,
                { backgroundColor: data === this.state.hourPicked ? '#F50057' : '#F8BBD0' }]}
            >
                <View style={{ height: 50, width: 5, backgroundColor: '#26A69A', justifyContent: 'flex-start' }} />
                <Text style={{ flex: 1, color: 'white', textAlign: 'center' }}>{data}</Text>
            </TouchableOpacity>
        );
    }
    _onPickDate = (index) => this.setState({ indexPickDate: index });

    _onPickHour = (data) => {

        this.setState({ hourPicked: data })
        //console.log("hourPicked : " + this.state.hourPicked)
    };

    _renderPickDate() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#FF80AB' }}>
                {
                    this.state.routers.map((router, i) => {
                        return (
                            <TouchableOpacity
                                key={router.key}
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottomWidth: 3,
                                    marginBottom: 1,
                                    borderBottomColor: i === this.state.indexPickDate ? '#FFFFFF' : '#FF80AB',
                                }}
                                onPress={() => this._onPickDate(i)}
                            >
                                <Text style={{ color: 'white', fontSize: 14 }}>
                                    {router.title}
                                </Text>
                                <Text style={{ color: 'white', fontSize: 14 }}>
                                    {router.time}
                                </Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    }

    _onNext = () => {
        console.log('Complete Booking')
        const booking = {
            storeAddress: this.state.mStoreAddress,
            date: this.state.routers[this.state.indexPickDate].time,
            hour: this.state.hourPicked
        }
        this.props.navigation.navigate('Complete', { booking: booking })
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
                <View style={{ flex: 1 }}>
                    <View style={{ height: 40, paddingLeft: 30, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20 }}>Pick date</Text>
                    </View>
                    <View style={{ height: 60, width: WIDTH }}>
                        {this._renderPickDate()}
                    </View>
                    <View style={{ height: 40, paddingLeft: 30, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20 }}>Pick hour : {this.state.hourPicked}</Text>
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}
                        pageSize={4}
                    />
                    <View style={{ height: 60, width: WIDTH, padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => this._onNext()}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: 15,
                                marginLeft: 15,
                                backgroundColor: '#26A69A'
                            }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
