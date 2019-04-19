import HomeScreen from '../screen/HomeScreen';
import HomwScreenAnimated from '../screen/HomeScreenAnimated';
import WebNewsScreen from '../screen/WebNewsScreen';
import BookingScreen from '../screen/BookingScreen';
import PickTimeScreen from '../screen/PickTimeScreen';
import BookingCompleteScreen from '../screen/BookingCompleteScreen';
import MemershipScreen from '../screen/MemershipScreen';
import CouponScreen from '../screen/CouponScreen';


import { createStackNavigator } from 'react-navigation';

const HomeStack = createStackNavigator(
    {
        Home: HomwScreenAnimated,
        Web: WebNewsScreen,
        Book: BookingScreen,
        Mem: MemershipScreen,
        Coupon: CouponScreen,
        PickTime: PickTimeScreen,
        Complete: BookingCompleteScreen
    },
    {
        initialRouteName: "Home",
        headerMode: 'none',
    }
)

export default HomeStack;