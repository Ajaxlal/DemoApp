import React from 'react';
import { View } from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';

const MapViewScreen = ({ route }) => {

    const { name, lat, lng } = route.params;

    return (
        <View style={styles.containerStyle}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapViewStyle}
                initialRegion={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    draggable
                    coordinate={{
                        latitude: lat,
                        longitude: lng,
                    }}
                    title={name}
                />
            </MapView>
        </View>
    );
}

export default MapViewScreen;