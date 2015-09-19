import React from 'react-native';
var {
  Text,
  View,
  Image
} = React;

import styles from './styles';
import fonts from './../../styles/fonts';

export default React.createClass({
  displayName: 'Header',
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('image!iTunesArtwork')} style={styles.logo}/>
        <Text style={fonts.big}>ZEBRETO</Text>
      </View>
      );
  }
});
