import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View, TextInput, Button } from "react-native";

import styles from "./style";
import { fetchCountryData, parseCountry } from "./helper";
import { COUNTRY_DETAILS_SCREEN, RIGHT_ARROW } from "../../constants";
import Loader from "../../components/ActivityIndicator.js";

const HomeScreen = ({ navigation }) => {
    const [countries, setCountries] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchCountryData(setCountries, setIsLoading)
    }, [])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchTextStyle}
                    placeholder="Search..."
                    onChangeText={setSearchText}
                    value={searchText}
                />
            </View>
            {isLoading ? <Loader />
                : <>
                    <FlatList
                        style={styles.listContainer}
                        data={searchText ? parseCountry({ countries, searchText }) : countries}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate(COUNTRY_DETAILS_SCREEN, { itemData: item })} style={{ flex: 1, flexDirection: 'row', margin: 10, borderWidth: 2, borderColor: '#20B3EA', borderRadius: 10, padding: 5, alignItems: 'center' }}>
                                    <Image source={{ uri: item?.flags?.png }} style={styles.flagStyle} />
                                    <View style={styles.countryTextContainer}>
                                        <Text style={styles.countryNameStyle}>{item?.name}</Text>
                                        {item.currencies?.map(curreny => {
                                            return (
                                                <View style={styles.currencyTextContainer}>
                                                    <Text>currency : {curreny?.name}</Text>
                                                    <Text>symbol : {curreny?.symbol}</Text>
                                                </View>
                                            )
                                        })}
                                        <Text>capital : {item?.capital}</Text>
                                    </View>
                                    <Image source={RIGHT_ARROW} style={styles.righticonStyle} />
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item) => item.name}
                    />

                </>
            }
        </View>
    )
}

export default HomeScreen;