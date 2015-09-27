import React from 'react-native';
var {
  StyleSheet,
  Text,
  View
} = React;

import {fonts, scalingFactors} from './../styles/fonts';
import Dimensions from 'Dimensions';
let {width} = Dimensions.get('window');

var HeadingText = React.createClass({
  displayName: 'HeadingText',

  propTypes: {
    style: View.propTypes.style
  },

  render() {
    return (
      <Text style={[this.props.style, fonts.big, scaled.big]}>
        {this.props.children}
      </Text>
      );
  }
});

var scaled = StyleSheet.create({
  big: {
    fontSize: width / scalingFactors.big
  }
});


export default HeadingText;

