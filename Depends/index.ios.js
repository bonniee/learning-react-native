
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import _ from 'lodash';
import Video from 'react-native-video';

export default class Depends extends Component {
  render() {
    var number = _.random(0, 100);
    console.log("Your lucky number is: " + number);

    return (
      <View style={styles.container}>
        <Video 
          source={require('./warbler.mp4')}
          rate={1.0}                     // 0 is paused, 1 is normal.
           muted={true}                  // Mutes the audio entirely.
           paused={false}                 // Pauses playback entirely.
           resizeMode="cover"             // Fill the whole screen at aspect ratio.
           repeat={true}                  // Repeat forever.
           style={styles.backgroundVideo}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
});

AppRegistry.registerComponent('Depends', () => Depends);
