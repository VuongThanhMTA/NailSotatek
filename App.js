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
import { createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import {
  ActivityIndicator,
  StatusBar,
  View,
  Image,
  Text
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
      tabBarIcon: ({ focused, tintColor }) => (
        focused ?
          <View style={styles.iconHomeActive}>
            <Image source={require('./src/images/tab_Home/tab_home.png')} />
            <Text style={{ paddingLeft: 4, color: "white" }}>Home</Text>
          </View> :
          <View style={styles.iconTabBar}>
            <Image source={require('./src/images/tab_Home/tab_home_active.png')} />
          </View>)
    }
  },
  Notifi: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        focused ?
          <View style={styles.iconNotiActive}>
            <Image source={require('./src/images/tab_noti/tab_noti.png')} />
            <Text style={{ paddingLeft: 4, color: "white" }}>Noti</Text>
          </View> :
          <View style={styles.iconTabBar}>
            <Image source={require('./src/images/tab_noti/tab_noti_active.png')} />
          </View>)
    }
  },
  Store: {
    screen: StoreScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        focused ?
          <View style={styles.iconStoreActive}>
            <Image source={require('./src/images/tab_location/tab_location.png')} />
            <Text style={{ paddingLeft: 4, color: "white" }}>Store</Text>
          </View> :
          <View style={styles.iconTabBar}>
            <Image source={require('./src/images/tab_location/tab_location_active.png')} />
          </View>)
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      //title: 'Account',
      tabBarIcon: ({ focused, tintColor }) => (
        focused ?
          <View style={styles.iconUserActive}>
            <Image source={require('./src/images/tab_user/tab_user.png')} />
            <Text style={{ paddingLeft: 4, color: "white" }}>Account</Text>
          </View> :
          <View style={styles.iconTabBar}>
            <Image source={require('./src/images/tab_user/tab_user_active.png')} />
          </View>)
    }
  },
},
  {
    //headerMode: 'none',
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#000000',
      scrollEnabled: true,
      showLabel: false,
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
    Tab: {
      screen: TabNavigator,
      navigationOptions: {
        //  title: "Tab"
      }
    },
    WebView: {
      screen: MyWebScreen,
      navigationOptions: {
        title: 'Nail'
      }
    }
  },
  {
    initialRouteName: "Tab",
    headerMode: 'none'
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
    headerMode: 'none',
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
    // headerMode: 'none',
  }
));
