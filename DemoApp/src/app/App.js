/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import 'react-native-gesture-handler';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from '../navigation';

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex:1,
    backgroundColor: isDarkMode ? Colors.darker : "#74C9EC",
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navigation/>
    </SafeAreaView>
  );
};

export default App;
