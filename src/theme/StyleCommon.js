import {
    StyleSheet, Dimensions, Platform, StatusBar
} from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');


const StyleCommon = StyleSheet.create({

    inputUserContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#212121'
    },
    inputUser: {
        width: WIDTH - 55,
        height: 45,
        // backgroundColor: 'rgba(0,0,0,0.35)',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#B0BEC5',
        fontSize: 16,
        marginHorizontal: 25,
        paddingLeft: 16,
        color: '#000000'
    },
    inputRegister: {
        width: WIDTH - 55,
        height: 45,
        // backgroundColor: 'rgba(0,0,0,0.35)',
        backgroundColor: 'white',
        borderColor: '#B0BEC5',
        fontSize: 16,
        marginHorizontal: 25,
        paddingLeft: 16,
        color: '#000000'
    },
    buttonNext: {
        marginTop: 15,
        width: WIDTH - 55,
        height: 45,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: '#B0BEC5',
        paddingVertical: 10
    },

    memberContainer: {
        width: WIDTH,
        height: 80,
        alignItems: "center",
        flexDirection: 'row',
        padding: 10,
    },
    buttonBooking: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        margin: 5,
        padding: 5,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 6
    },
    accTouch: {
        flex: 1,
        margin: 15,
        paddingLeft: 20,
        justifyContent: 'center'
    },
    accTextTouch: {
        fontSize: 18,
        color: '#616161'
    },
    boxPickHour: {
        flexDirection:'row',
        width: 100,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#F8BBD0',
        borderRadius: 5,
        margin: 5
    }


});
export default StyleCommon;