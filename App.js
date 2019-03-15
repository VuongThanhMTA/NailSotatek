import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './src/styles';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './src/screen/HomeScreen'
import MyWebScreen from './src/screen/WebViewScreen'
import FavoriteScreen from './src/screen/FavoriteScreen'
import ProfileScreen from './src/screen/ProfileScreen'
import UserNameScreen from './src/screen/UserNameScreen'
import PasswordScreen from './src/screen/PasswordScreen'
import RegisterScreen from './src/screen/RegisterScreen'

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
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
        focused ? <Image
          source={require('./src/images/houseBlack24.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        /> : <Image
            source={require('./src/images/housePink24.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />)
    }
  },
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ focused, tintColor }) => (
        focused ? <Image
          source={require('./src/images/heartBlack24.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        /> : <Image
            source={require('./src/images/heartPink24.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />)
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ focused, tintColor }) => (
        focused ? <Image
          source={require('./src/images/avatarBlack24.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        /> : <Image
            source={require('./src/images/avatarPink24.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />)
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
        width: 100,
      },
      style: {
        backgroundColor: '#f44336',
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
