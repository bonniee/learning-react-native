import React from 'react-native';
var {
  View,
  Image
} = React;

import styles from './styles';
import HeadingText from './../HeadingText';

export default React.createClass({
  displayName: 'Header',
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('image!iTunesArtwork')} style={styles.logo}/>
        <HeadingText>ZEBRETO</HeadingText>
      </View>
      );
  }
});
