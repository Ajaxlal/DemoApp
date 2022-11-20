import { StyleSheet } from "react-native";
import { COLOR_PRIMARY,Text_COLOR} from "../../constants";
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    flagContainer: {
        alignItems: 'center',
        height: '30%',
        borderRadius: 15,
    },
    flagStyle: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Text_COLOR,
        padding: 5
    },
    SubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    textStyle: {
        fontSize: 14,
        color: Text_COLOR,
        fontWeight: '600'
    },
    buttonContainer: {
        alignItems: 'center',
        paddingTop: 20
    },
    buttonStyle: {
        width: '70%',
        padding: 15,
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: COLOR_PRIMARY,
        backgroundColor: 'lightgray'
    },
    buttonTextStyle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLOR_PRIMARY
    },
});
export default Styles;