var React = require('react-native');
var { StyleSheet } = React;

var baseFontSize = 18;

var styles = StyleSheet.create({
  bigText: {
    fontSize: baseFontSize + 8,
    color: '#FFFFFF'
  },
  mainText: {
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});

// For use elsewhere...
styles['baseFontSize'] = baseFontSize;

module.exports = styles;