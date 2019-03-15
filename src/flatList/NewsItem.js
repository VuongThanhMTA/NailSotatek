import React, { Component } from 'react';
import styles from '../styles'
import {
    Text, View, Image, TouchableOpacity
} from 'react-native';

export default class NewsItem extends Component {
    constructor(props) {
        super(props)
    }

    _onPress = () => {
        const { item } = this.props;
        this.props.onPressItem(item.url);
    };
    render() {
        const { item } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, margin: 10, backgroundColor: '#ECEFF1' }}>
                    <TouchableOpacity onPress={this._onPress}>
                        <Image style={styles.stretch} source={{ uri: item.image }} />
                    </TouchableOpacity>
                    <Text style={styles.itemText}>{item.title}</Text>

                </View>
                <View style={{
                    height: 1,
                    backgroundColor: 'white'
                }}>
                </View>
            </View>
        );
    }
}
