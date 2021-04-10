import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={{height: '100%', width: '100%', display: 'flex',}}>
      <View style={{height: 80, backgroundColor:'tomato'}}><Text>buttons here</Text></View>
      <View style={{flexGrow: 1, flexShrink: 1, flexBasis: 'auto', padding: 10}}>
      <TouchableOpacity style={{borderRadius: 50}}>
      <Image style={{height: '100%', width: '100%', resizeMode: 'cover', alignSelf: 'stretch', borderRadius: 50}} source={{uri: 'https://picsum.photos/1080/1920',}} />
      </TouchableOpacity>
      
      </View>
        <View style={{height: 80, backgroundColor:'tomato'}}><Text>buttons here</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
