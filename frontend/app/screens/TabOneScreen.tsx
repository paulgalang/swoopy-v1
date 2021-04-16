import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, Image, Animated, PanResponder } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  // return (
  //   <View style={styles.container}>
  //     <Animated.View
  //       style={{
  //         transform: [{ translateX: pan.x }, { translateY: pan.y }]
  //       }}
  //       {...panResponder.panHandlers}
  //     >
  //       <View style={styles.box} />
  //     </Animated.View>
  //   </View>
  // );
  return (
    <View style={{ height: '100%', width: '100%', display: 'flex' }}>
      <View style={{ height: 80, backgroundColor: 'tomato' }}>
        <Text>buttons here</Text>
      </View>
      <View
        style={{
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 'auto',
          paddingTop: '10%',
          paddingLeft: '10%',
          paddingRight: '10%',
          paddingBottom: '5%',
        }}
      >
        {/* <TouchableOpacity style={{borderRadius: 50}}>
      <Image style={{height: '100%', width: '100%', resizeMode: 'cover', alignSelf: 'stretch', borderRadius: 50}} source={{uri: 'https://picsum.photos/1080/1920',}} />
      </TouchableOpacity> */}
        {/* <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <Image style={{height: '100%', width: '100%', resizeMode: 'cover', alignSelf: 'stretch', borderRadius: 50}} source={{uri: 'https://picsum.photos/1080/1920',}} />
      </Animated.View> */}
        <View
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          <View // last card
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              zIndex: 1,
              bottom: '16%',
              backgroundColor: 'yellow', // Red
              transform: [{ scale: 0.8 }],
            }}
          />
          <View // second card
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              zIndex: 2,
              bottom: '8%',
              backgroundColor: 'green', // Green
              transform: [{ scale: 0.9 }],
            }}
          />
          <Animated.View // frontmost card
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              zIndex: 3,
              bottom: 0,
              backgroundColor: 'blue', // Blue
              transform: [{ scale: 1.0 }, { translateX: pan.x }, { translateY: pan.y }],
            }}
            {...panResponder.panHandlers}
          >
            <Image
              style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
              source={{ uri: 'https://picsum.photos/1080/1920' }}
            />
          </Animated.View>
        </View>
      </View>
      <View style={{ height: 80, backgroundColor: 'tomato' }}>
        <Text>buttons here xD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
