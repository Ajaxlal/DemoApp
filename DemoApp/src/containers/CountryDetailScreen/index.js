import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MAPVIEW_SCREEN } from "../../constants";

import Styles from "./styles";

const CountryDetailScreen = ({ navigation, route }) => {

    const { itemData } = route.params
    const {
        name,
        latlng,
        capital,
        region,
        nativeName,
        timezones,
        population,
        callingCodes,
        flags
    } = itemData;

    return (
        <View style={Styles.container}>
            <View style={Styles.flagContainer}>
                <Image source={{ uri: flags.png }} style={Styles.flagStyle} />
            </View>
            <Text style={Styles.title}>{name}</Text>
            <View style={Styles.SubContainer}>
                <Text style={Styles.textStyle}>Capital : {capital}</Text>
                <Text style={Styles.textStyle}>Region : {region}</Text>
            </View>
            <Text style={Styles.textStyle}>Native name : {nativeName}</Text>
            <Text style={Styles.textStyle}>Time zone : {timezones}</Text>
            <Text style={Styles.textStyle}>Population : {population}</Text>
            <Text style={Styles.textStyle}>Calling code : +{callingCodes}</Text>
            <View style={Styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(MAPVIEW_SCREEN, { name: name, lat: latlng[0], lng: latlng[1] })}
                    style={Styles.buttonStyle}
                >
                    <Text style={Styles.buttonTextStyle}>View in Map</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default CountryDetailScreen;