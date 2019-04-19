import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions, Platform, StatusBar, Animated } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import NewsScreen from './NewsScreen';
import NotificationScreen from './NotificationScreen';
import StoreScreen from './StoreScreen';
import AccountScreen from './AccountScreen';
import MarkerAnimated from '../screen/MarkerAnimated';
import imageBG from '../../assets/Assets.xcassets/ic_app.imageset/ic_app.png'

colorsTab = ['#82b840', '#26abfc', '#ff9c29', '#f59c94'];
var { width, height } = Dimensions.get('window');
export default class HomeScreen extends React.Component {
    state = {
        index: 0,
        animActiveTab: new Animated.Value(0),
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


                <View style={{ flex: 1 }}
                    onStartShouldSetResponder={(evt) => true}
                    onMoveShouldSetResponder={(evt) => true}
                    onResponderGrant={(evt) => {

                    }}>
                    <TabView
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderTabBar={this._renderTabBar}
                        onIndexChange={this._handleIndexChange}
                    />
                </View>
            </View >
        );
    }

    _renderScene = SceneMap({
        news: () => <NewsScreen {...this.props} />,
        noti: () => <NotificationScreen {...this.props} />,
        store: () => <StoreScreen {...this.props} />,
        acc: () => <AccountScreen {...this.props} />
    });


    _renderTabBar = () => {

        const animTabBar = this.state.animActiveTab.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [width / 6 * 0, width / 6 * 1, width / 6 * 2, width / 6 * 3]
        });

        const colorActiveTabBar = this.state.animActiveTab.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [colorsTab[0], colorsTab[1], colorsTab[2], colorsTab[3]]
        });

        const boderRightRadius = this.state.animActiveTab.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [50, 50, 50, 0]
        });

        const boderLeftRadius = this.state.animActiveTab.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [0, 50, 50, 50]
        });

        const styleActiveTab = {
            width: width / 2, height: 50, position: 'absolute',
            left: animTabBar,
            backgroundColor: colorActiveTabBar,
            borderBottomLeftRadius: boderLeftRadius,
            borderBottomRightRadius: boderRightRadius,
            borderTopLeftRadius: boderLeftRadius,
            borderTopRightRadius: boderRightRadius,
        }
        return (
            <View style={{ height: 50, width: width }}>
                <View style={styles.tabBar}>
                    <Animated.View style={styleActiveTab}>
                    </Animated.View>
                    {
                        this.state.routes.map((route, i) => {
                            return (
                                <TouchableOpacity
                                    key={route.key}
                                    style={[styles.tabItem, i === this.state.index ? { flex: 3 } : { flex: 1 }]}
                                    onPress={() => this._onTabClick(i)}>
                                    {/* <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}> */}
                                        {this._renderTabBarIcon(i)}
                                    {/* </View> */}
                                </TouchableOpacity>
                            );
                        })
                    }
                </View >
                <View style={{ height: 1, width: '100%', backgroundColor: '#CFD8DC' }} />
            </View>
        );
    };

    _handleIndexChange = (index) => {
        Animated.timing(this.state.animActiveTab, {
            toValue: index,
            duration: 400
        }).start();
        this.setState({ index })
    }

    _onTabClick(index) {
        Animated.timing(this.state.animActiveTab, {
            toValue: index,
            duration: 400
        }).start();
        this.setState({ index })
    }


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
                    backgroundColor: '#f59c94',
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
                    (<View style={styles.backgroundItemTab}>
                        <Image source={require('../../assets/Assets.xcassets/tab_home.imageset/tab_home.png')} />
                        <Text style={styles.tabTitle}>Home</Text>
                    </View>) :
                    <Image source={require('../../assets/Assets.xcassets/tab_home_active.imageset/tab_home_active.png')} />;
            case 1:
                return this.state.index === index ?
                    (<View style={styles.backgroundItemTab}>
                        <Image source={require('../../assets/Assets.xcassets/tab_noti.imageset/tab_noti.png')} />
                        <Text style={styles.tabTitle}>Notification</Text>
                    </View>) :
                    <Image source={require('../../assets/Assets.xcassets/tab_noti_active.imageset/tab_noti_active.png')} />;
            case 2:
                return this.state.index === index ?
                    (<View style={styles.backgroundItemTab}>
                        <Image source={require('../../assets/Assets.xcassets/tab_location.imageset/tab_location.png')} />
                        <Text style={styles.tabTitle}>Store</Text>
                    </View>) :
                    <Image source={require('../../assets/Assets.xcassets/tab_location_active.imageset/tab_location_active.png')} />;
            case 3:
                return this.state.index === index ?
                    (<View style={styles.backgroundItemTab}>
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
        width:width,
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
    },
    backgroundItemTab: {
        width: width / 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }


});
