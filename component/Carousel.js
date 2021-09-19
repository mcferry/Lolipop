import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';

import CarouselItem from './CarouselItem';

const {width, heigth} = Dimensions.get('window');

function infiniteScroll(dataList, mySlide) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + width / 3 + 20;
    else {
      scrollValue = 0;
      scrolled = 0;
    }
    if (mySlide.current) {
      mySlide.current.scrollToOffset({
        animated: true,
        offset: scrollValue,
      });
    }
  }, 6000);
}

const Carousel = ({data}) => {
  const mySlide = useRef();
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);
  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList, mySlide);
  });
  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          ref={mySlide}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
    );
  }
  console.log('No Images');
  return null;
};

export default Carousel;
