import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import AuthLoadingScreen from '../screen/AuthLoadingScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Home: HomeStack,
        Auth: AuthStack,
    }, {
        initialRouteName: 'AuthLoading',
    }
))

export default AppContainer;

