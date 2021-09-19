import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colors from '../config/colors';

const TagBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Tag 1</Text>
      <Text style={styles.textstyle}>Tag 2</Text>
      <Text style={styles.textstyle}>Tag 3</Text>
      <Text style={styles.textstyle}>Tag 4</Text>
    </View>
  );
};

export default TagBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textstyle: {
    textAlign: 'center',
    color: 'white',
    margin: 5,
    height: 25,
    width: 75,
    padding: 1,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
});
