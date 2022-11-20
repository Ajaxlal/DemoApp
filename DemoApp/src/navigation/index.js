import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../containers/HomeScreen';
import CountryDetailScreen from '../containers/CountryDetailScreen';
import MapViewScreen from '../containers/MapViewScreen';
import { MAPVIEW_SCREEN,COUNTRIES_SCREEN,COUNTRY_DETAILS_SCREEN } from '../constants';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#20B3EA' } }}>
                <Stack.Screen name={COUNTRIES_SCREEN} component={HomeScreen} />
                <Stack.Screen name={COUNTRY_DETAILS_SCREEN} component={CountryDetailScreen} options={{title :"Country Details"}}/>
                <Stack.Screen name={MAPVIEW_SCREEN} component={MapViewScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;