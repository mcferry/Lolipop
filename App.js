import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './navigation/tabs';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
