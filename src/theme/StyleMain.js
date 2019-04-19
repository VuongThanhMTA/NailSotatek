import {
    StyleSheet, Platform, StatusBar, Dimensions
} from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const StyleMain = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    fill: {
        flex: 1
    },
    fillMarginTop: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        width: WIDTH,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',

    },
    line: {
        height: 1,
        backgroundColor: '#E0E0E0'
    }

});
export default StyleMain;