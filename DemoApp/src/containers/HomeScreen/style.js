import { StyleSheet } from "react-native";
import { COLOR_PRIMARY } from "../../constants";
const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
    },
    searchContainer: {
        height: 50,
        flexDirection: 'row',
        padding: 5,
        marginTop: 10,
        ustifyContent: 'center',
    },
    searchTextStyle: {
        flex: 1,
        borderRadius: 20,
        borderColor: COLOR_PRIMARY,
        borderWidth: 1,
        marginHorizontal: 10,
        paddingHorizontal: 15,
    },
    listContainer: {
        flex: 1
    },
    flagStyle: {
        height: 40,
        width: 40,
        borderRadius: 25
    },
    countryTextContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    countryNameStyle: {
        fontSize: 14,
        fontWeight: '700'
    },
    currencyTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    righticonStyle: {
        height: 25,
        width: 25
    },
});

export default styles;