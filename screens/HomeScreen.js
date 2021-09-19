import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import Carousel from '../component/Carousel';
import TagBar from '../component/TagBar';
import {dummyData} from '../Test/Data';
import colors from '../config/colors';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TagBar />
      </View>
      <View style={styles.content}>
        <Carousel data={dummyData} />
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  topBar: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  content: {
    flex: 9,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
