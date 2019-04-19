import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions, Platform, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import NewsScreen from './NewsScreen';
import NotificationScreen from './NotificationScreen';
import StoreScreen from './StoreScreen';
import AccountScreen from './AccountScreen';




export default class HomeScreen extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'news', title: 'News', color: '#CDDC39' },
            { key: 'noti', title: 'Noti', color: '#039BE5' },
            { key: 'store', title: 'Store', color: '#FFC107' },
            { key: 'acc', title: 'User', color: '#EC407A' }
        ],
    };

    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
                <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: this.state.routes[this.state.index].color, fontSize: 20 }}>Nail Everly 29</Text>
                </View>

                <TabView
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={this._handleIndexChange}
                />
            </View >
        );
    }

    _renderScene = SceneMap({
        news : () => <NewsScreen {...this.props} />,
        noti : () => <NotificationScreen {...this.props} />,
        store : () => <StoreScreen {...this.props} />,
        acc : () => <AccountScreen {...this.props} />
    });


    _renderTabBar = () => {
        return (
            <View style={{ height: 50, width: '100%' }}>
                <View style={styles.tabBar}>
                    {
                        this.state.routes.map((route, i) => {
                            const backgroundItem = {
                                flex: 1,
                                backgroundColor: 'white'
                            }
                            return (
                                <TouchableOpacity
                                    key={route.key}
                                    style={[styles.tabItem, i === this.state.index ? this._renderBackgroundItem() : backgroundItem]}
                                    onPress={() => this._handleIndexChange(i)}>
                                    {this._renderTabBarIcon(i)}
                                </TouchableOpacity>
                            );
                        })
                    }
                </View >
                <View style={{ height: 1, width: '100%', backgroundColor: '#CFD8DC' }} />
            </View>
        );
    };

    _handleIndexChange = index => this.setState({ index });

    _renderBackgroundItem() {
        switch (this.state.index) {
            case 0:
                return backgroundColor = {
                    backgroundColor: '#82b840',
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                    flex: 3
                };
            case 1:
                return backgroundColor = {
                    backgroundColor: '#26abfc',
                    borderRadius: 25,
                    flex: 3
                };
            case 2:
                return backgroundColor = {
                    backgroundColor: '#ff9c29',
                    borderRadius: 25,
                    flex: 3
                };
            case 3:
                return backgroundColor = {
                    backgroundColor: '#F06292',
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                    flex: 3
                };
        }
    }

    _renderTabBarIcon(index) {
        switch (index) {
            case 0:
                return this.state.index === index ?
                    (<View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/Assets.xcassets/tab_home.imageset/tab_home.png')} />
                        <Text style={styles.tabTitle}>Home</Text>
                    </View>) :
                    <Image source={require('../../assets/Assets.xcassets/tab_home_active.imageset/tab_home_active.png')} />;
            case 1:
                return this.state.index === index ?
                    (<View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/Assets.xcassets/tab_noti.imageset/tab_noti.png')} />
                        <Text style={styles.tabTitle}>Notification</Text>
                    </View>) :
                    <Image source={require('../../assets/Assets.xcassets/tab_noti_active.imageset/tab_noti_active.png')} />;
            case 2:
                return this.state.index === index ?
                    (<View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/Assets.xcassets/tab_location.imageset/tab_location.png')} />
                        <Text style={styles.tabTitle}>Store</Text>
                    </View>) :
                    <Image source={require('../../assets/Assets.xcassets/tab_location_active.imageset/tab_location_active.png')} />;
            case 3:
                return this.state.index === index ?
                    (<View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/Assets.xcassets/tab_user.imageset/tab_user.png')} />
                        <Text style={styles.tabTitle}>User</Text>
                    </View>) :
                    <Image source={require('../../assets/Assets.xcassets/tab_user_active.imageset/tab_user_active.png')} />;
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        margin: 2,
        height: 50
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    tabTitle: {
        color: 'white',
        margin: 4
    }
});
