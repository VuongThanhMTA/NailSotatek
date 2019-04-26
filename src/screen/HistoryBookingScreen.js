import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppStyle from '../theme';
import { connect } from 'react-redux';
import { removeBooking } from '../global/actions'

class HistoryBookingScreen extends Component {


    _goBack = () => this.props.navigation.goBack();

    _renderBooking = (bookings) => {
        return bookings.map((booking, index) => {
            return (
                <View key={index}
                    style={{
                        padding: 20,
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >

                    <TouchableOpacity onPress={() => this.props.remove(booking)}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}> {booking.add} </Text>
                        <Text style={{ fontSize: 16 }}> {booking.time} </Text>
                        <Text style={{ fontSize: 16 }}> {booking.day} </Text>
                    </TouchableOpacity>

                </View>
            );
        });
    }

    render() {
        const bookings = this.props.bookings;
        return (
            <View style={AppStyle.StyleMain.fillMarginTop}>
                <View style={AppStyle.StyleMain.header}>
                    <TouchableOpacity
                        style={{ justifyContent: 'flex-start', paddingLeft: 10 }}
                        onPress={() => this._goBack()}
                    >
                        <Image source={require('../../assets/Assets.xcassets/Navi/nav_back.imageset/back.png')} />
                    </TouchableOpacity>
                </View>
                {this._renderBooking(bookings)}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookings: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        remove: (booking) => dispatch(removeBooking(booking))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryBookingScreen);