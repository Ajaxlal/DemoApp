import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
import { COLOR_PRIMARY } from '../../constants';

const Loader = ({isSmall = false, color = COLOR_PRIMARY, style}) => {
  return (
    <View
      style={[
        isSmall ? styles.screenContainerSmall : styles.screenContainer,
        style,
      ]}>
      <ActivityIndicator color={color} size={isSmall ? 'small' : 'large'} />
    </View>
  );
};
export default Loader;