import React, { Component } from 'react';
import AppStyle from '../theme'
import {
    Text, View, Image, TouchableOpacity
} from 'react-native';

export default class ItemNews extends Component {
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
            <View style={{ flex: 1, flexDirection: 'column', marginVertical: 10 }}>

                <Image style={{ width: '100%', height: 200 }} source={{ uri: item.image }} />

                <View style={{
                    padding: 10,
                    backgroundColor: '#FF80AB',
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                }}>
                    <TouchableOpacity onPress={this._onPress}>

                        <Text numberOfLines={1} style={{ color: 'white', fontSize: 16 }}>
                            {item.title}
                        </Text>
                        <Text numberOfLines={1} style={{ color: 'white', fontSize: 12 }}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
