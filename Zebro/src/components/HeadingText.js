var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

import fonts from './../styles/fonts';

var HeadingText = React.createClass({
  displayName: 'HeadingText',

  propTypes: {
    style: View.propTypes.style
  },

  render() {
    return (
      <Text style={[this.props.style, fonts.big]}>
        {this.props.children}
      </Text>
      );
  }
});

export default HeadingText;

