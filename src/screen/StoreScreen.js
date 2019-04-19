import React from 'react';
import { View, Text, Animated, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MapView, Permissions, Location, Polyline } from 'expo';
import mServer from '../networking/Server'
import AppStyle from '../theme'
import PolyLine from '@mapbox/polyline'

import bg from '../../assets/Assets.xcassets/AppIcon.appiconset/Icon-App-60x602x.png';

const google_direction_api = 'https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyAR9YHUQxiJnwJcHHFzedPFtrhnPuoEPv4';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = width - 100;
export default class StoreScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            markerFromServer: [],
            locationResult: null,

            location: {
                latitude: 21.019531,
                longitude: 105.831279,
            },
            destination: {
                latitude: 21.019531,
                longitude: 105.831279,
            },
            pointCoords: []
        }
    }


    componentDidMount() {
        this._getStore();
        this._getLocation();
    }


    async _getLocation() {
        console.log("Location before : ", this.state.location);
        let { status } = await Permissions.getAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            const res = await Permissions.askAsync(Permissions.LOCATION);
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
               // console.log("Position : ", position);
                this.setState(
                    {
                        location: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        }
                    });
                // this._getDirection();
                this._mergeCoord();
            }, (error) => console.log("Error", error)
        )

    }


    _getStore() {
        mServer.getStores().then((data) => {
            this.setState({ markerFromServer: data })
        })
    }

    _mergeCoord = () => {
        const data = {
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            desLatitude: this.state.destination.latitude,
            desLongitude: this.state.destination.longitude,
        }
        const hasStartAndEnd = data.latitude != null && data.longitude != null
        if (hasStartAndEnd) {
            const concatStart = `${data.latitude},${data.longitude}`
            const concatEnd = `${data.desLatitude},${data.desLongitude}`
            this._getDirection(concatStart, concatEnd);
        }
    }

    async _getDirection(start, end) {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=AIzaSyAR9YHUQxiJnwJcHHFzedPFtrhnPuoEPv4`)
            // const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.location}&destination=${this.state.destination}&key=AIzaSyAR9YHUQxiJnwJcHHFzedPFtrhnPuoEPv4`);
            const json = await response.json();
            const points = PolyLine.decode(json.routes[0].overview_polyline.points);
            const pointCoords = points.map(point => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                }
            })
            this.setState({ pointCoords })
            //console.log("Points Coords : ", pointCoords)
        } catch (error) {
            console.log("Error get direction : ", error)
        }
    }
    _onMarkerPress = (lat, long) => {
        this.setState({
            destination: {
                latitude: lat,
                longitude: long
            }
        }, () => this._mergeCoord())

    }
    _renderMarker = () => {
        return (
            <View>
                {
                    this.state.markerFromServer.map((marker, index) => {
                        return (
                            <MapView.Marker
                                onPress={() => this._onMarkerPress(marker.lat, marker.long)}
                                key={index}
                                coordinate={{
                                    latitude: marker.lat,
                                    longitude: marker.long
                                }}
                                title={marker.name}
                                description={marker.address}
                            />
                        )
                    })
                }
            </View>
        )

    }



    render() {
     
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    followsUserLocation={true}
                    showsUserLocation={true}
                    style={{ flex: 1, margin: 5 }}
                    initialRegion={
                        {
                            latitude: 21.019531,
                            longitude: 105.831279,
                            latitudeDelta: 0.1,
                            longitudeDelta: 0.1,
                        }
                    }
                >
                    {this._renderMarker()}

                    <MapView.Polyline
                        coordinates={this.state.pointCoords}
                        strokeWidth={2}
                        strokeColor='red'
                    />
                </MapView>

                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    // snapToInterval={CARD_WIDTH}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}>
                    {
                        this.state.markerFromServer.map((marker, index) => {
                            return (
                                <View
                                    key={index}
                                    style={styles.card}>
                                    <Text>{marker.name}</Text>
                                    <Text>{marker.address}</Text>
                                    <TouchableOpacity
                                        onPress={() => this._onMarkerPress(marker.lat, marker.long)}
                                        style={styles.btnDirection}>
                                        <Text >Direction</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </Animated.ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 1,
    },
    cardtitle: {
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(130,4,150, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,150, 0.5)",
    },
    btnDirection: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 100,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
