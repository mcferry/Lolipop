import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import colors from '../config/colors';

const FindScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Find Screen</Text>
    </View>
  );
};
export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
