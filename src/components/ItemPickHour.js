import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';

import AppStyle from '../theme';

export default class ItemPickHour extends Component {
    state = {}
    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 2, backgroundColor: '#64DD17' }} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}