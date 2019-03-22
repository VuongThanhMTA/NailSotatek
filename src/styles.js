

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

        width: 30,
        height: 30,
        borderRadius: 15,
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: .5,
        borderColor: '#fff',
        right: 10
    },
    iconTabBar: {
        backgroundColor: "#FFFFFF",

    },
    iconHomeActive: {
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#8BC34A",
        width: WIDTH * 2 / 5,
        height: 40,
        borderRadius: 20
    },
    iconNotiActive: {
        paddingLeft: 20,
        justifyContent: "center",
        backgroundColor: "#1976D2",
        width: WIDTH * 2 / 5,
        height: 40,
        borderRadius: 20
    },
    iconUserActive: {
        paddingLeft: 20,
        justifyContent: "center",
        backgroundColor: "#F06292",
        width: WIDTH * 2 / 5,
        height: 40,
        borderRadius: 20
    },
    iconStoreActive: {
        paddingLeft: 20,
        justifyContent: "center",
        backgroundColor: "#F9A825",
        width: WIDTH * 2 / 5,
        height: 40,
        borderRadius: 20
    }
});
export default styles 