import React from 'react';
import styles from './src/styles';
import HomeScreen from './src/screen/HomeScreen';
import MyWebScreen from './src/screen/WebViewScreen';
import NotificationScreen from './src/screen/NotificationScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import StoreScreen from './src/screen/StoreScreen';
import UserNameScreen from './src/screen/UserNameScreen';
import PasswordScreen from './src/screen/PasswordScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialTopTabNavigator,createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import {
  ActivityIndicator,
  StatusBar,
  View,
  Image,
} from 'react-native';


class AuthLoadingScreen extends React.Component {

  constructor() {
    super();
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('@AccessToken:key');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ focused, tintColor }) => (
        focused ?
        <View style={styles.iconHomeActive}>
          <Image source={require('./src/images/tab_Home/tab_home.png')} />
        </View> :
        <View style={styles.iconTabBar}>
          <Image source={require('./src/images/tab_Home/tab_home_active.png')} />
        </View>)
    }
  },
  Notifi: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ focused, tintColor }) => (
        focused ?
          <View style={styles.iconNotiActive}>
            <Image source={require('./src/images/tab_noti/tab_noti.png')} />
          </View> :
          <View style={styles.iconTabBar}>
            <Image source={require('./src/images/tab_noti/tab_noti_active.png')} />
          </View>)
    }
  },
  Store: {
    screen: StoreScreen,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ focused, tintColor }) => (
        focused ?
          <View style={styles.iconStoreActive}>
            <Image source={require('./src/images/tab_location/tab_location.png')} />
          </View> :
          <View style={styles.iconTabBar}>
            <Image source={require('./src/images/tab_location/tab_location_active.png')} />
          </View>)
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ focused, tintColor }) => (
        focused ?
          <View style={styles.iconUserActive}>
            <Image source={require('./src/images/tab_user/tab_user.png')} />
          </View> :
          <View style={styles.iconTabBar}>
            <Image source={require('./src/images/tab_user/tab_user_active.png')} />
          </View>)
    }
  },
}, {
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#000000',
      scrollEnabled: true,
      labelStyle: {
        fontSize: 0,
      },
      tabStyle: {
        width: styles.width,
      },
      style: {
        backgroundColor: '#FFFFFF',
      },
    },
  });



const AppStack = createStackNavigator(
  {
    Tab: TabNavigator,
    WebView: MyWebScreen
  },
  {
    initialRouteName: "Tab",
    defaultNavigationOptions: {
      header: null
    },
  }
);
const AuthStack = createStackNavigator(
  {
    UserName: UserNameScreen,
    Password: PasswordScreen,
    Register: RegisterScreen

  },
  {
    initialRouteName: "UserName",
    defaultNavigationOptions: {
      header: null
    },
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
