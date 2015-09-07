import React from 'react-native';
var {
  Text,
  View
} = React;

import styles from './styles';
import fonts from './../../styles/fonts';

export default React.createClass({
  displayName: 'Header',
  render() {
    return (
      <View>
        <Text style={fonts.big}>ZEBRETO</Text>
      </View>
      );
  }
});
