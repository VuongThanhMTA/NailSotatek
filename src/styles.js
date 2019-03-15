

import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
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
        borderRadius: 15

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
    }
});
export default styles 