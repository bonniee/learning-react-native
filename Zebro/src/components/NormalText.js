import React from 'react-native';
var {
  StyleSheet,
  Text,
  View
} = React;

import fonts from './../styles/fonts';

var NormalText = React.createClass({
  displayName: 'NormalText',

  propTypes: {
    style: View.propTypes.style
  },

  render() {
    return (
      <Text style={[this.props.style, fonts.normal]}>
        {this.props.children}
      </Text>
      );
  }
});

export default NormalText;

