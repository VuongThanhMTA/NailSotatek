import InputUserScreen from '../screen/InputUserScreen';
import InputPasswordScreen from '../screen/InputPasswordScreen';
import RegisterScreen from '../screen/RegisterScreen';

import { createStackNavigator } from 'react-navigation';

const AuthStack = createStackNavigator(
    {
        InputUser: InputUserScreen,
        InputPass: InputPasswordScreen,
        Register: RegisterScreen
    },
    {
        initialRouteName: "InputUser",
        headerMode: 'none',
    }
)

export default AuthStack;