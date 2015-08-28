/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var Video = require('react-native-video');
var _ = require('lodash');

var HelloWorld = require('react-native').NativeModules.HelloWorld;


var Depends = React.createClass({
  componentDidMount: function() {
    HelloWorld.greeting('Bonnie');
    console.log('Random number: ' + _.random(0, 5));
  },
  render: function() {
    return (
      <View style={styles.backgroundVideo}>
      <Video source={{uri: "PianoStairs"}} // Can be a URL or a local file.
             rate={1.0}                   // 0 is paused, 1 is normal.
             volume={1.0}                 // 0 is muted, 1 is normal.
             muted={false}                // Mutes the audio entirely.
             paused={false}               // Pauses playback entirely.
             resizeMode="cover"           // Fill the whole screen at aspect ratio.
             repeat={true}                // Repeat forever.
             style={styles.backgroundVideo} />

       <Text style={styles.overlay}>
          Read more: http://bit.ly/makepianostairs
       </Text>

       </View>
    );
  }
});

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#FFFF00'
  },
  overlay: {
    opacity: 0,
    position: 'absolute',
    top: 20,
    left: 20,
    height: 100,
    width: 200,
    color: '#FF0000'
  }
});

AppRegistry.registerComponent('Depends', () => Depends);
