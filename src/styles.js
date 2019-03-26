

import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        marginTop: 10
    },
    containerMembership: {

        alignItems: "center",
        flexDirection: 'row',
        paddingLeft: 10, height: 60,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 3
    },

    headerStyle: {
        height: 56, width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: WIDTH - 55,
        height: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        borderRadius: 25,
        fontSize: 16,
        marginHorizontal: 25,
        paddingLeft: 45,
        color: 'rgba(255,255,255,0.7)'
        // textAlign: 'center'
    },
    button: {
        width: WIDTH - 55,
        height: 45,
        backgroundColor: "#BCAAA4",
        borderRadius: 25,
        paddingVertical: 10
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#FFFFFF',
        textAlign: 'center'
    },

    stretch: {
        margin: 15,
        height: 200

    },
    avatarCircle: {

        width: 40,
        height: 40,
        borderRadius: 20,
    },
    avatarCircleB: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    itemText: {
        padding: 3,
        fontSize: 10,
        color: 'black',
        textAlign: 'center'
    },
    iconInput: {
        position: 'absolute',
        top: 10,
        left: 36
    },
    iconEye: {
        position: 'absolute',
        top: 10,
        right: 36
    },
    containerTopProfile: {
        flex: 2,
        padding: 20,
        backgroundColor: "#FFFFFF",
    },
    containerBottomProfile: {
        flex: 3,
        paddingRight: 10
    },
    containerTouchable: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        //  justifyContent: "center"
    },
    textTouchable: {
        flex: 3,
        fontSize: 16,
        paddingLeft: 10,
        alignItems: "center",
    },
    textLogout: {
        flex: 3,
        fontSize: 16,
        paddingLeft: 10,
        alignItems: "center",
        color: "#ff8a80"
    },
    touchableProfile: {
        margin: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: .5,
        // borderColor: '#fff',
        // right: 10
    },
    iconTabBar: {
        backgroundColor: "#FFFFFF",

    },
    iconHomeActive: {
        flexDirection: "row",
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#8BC34A",
        width: WIDTH * 2 / 5,
        height: 40,
        borderRadius: 20
    },
    iconNotiActive: {
        flexDirection: "row",
        paddingLeft: 20,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#1976D2",
        width: WIDTH * 2 / 5,
        height: 40,
        borderRadius: 20
    },
    iconUserActive: {
        flexDirection: "row",
        paddingLeft: 20,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#F06292",
        width: WIDTH * 2 / 5,
        height: 40,
        borderRadius: 20
    },
    iconStoreActive: {
        flexDirection: "row",
        paddingLeft: 20,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#F9A825",
        width: WIDTH * 2 / 5,
        height: 40,
        borderRadius: 20
    },

    container3Btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: WIDTH / 4,
        width: WIDTH,
        flexDirection: 'row',
        margin: 10,
        // padding:15
    },
    buttonBooking: {
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH / 4,
        margin: 5,
        height: WIDTH / 4,
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#9E9E9E",
       // shadowColor: '#000',
      //  shadowOffset: { width: 15, height: 15 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 3
    }




});
export default styles 