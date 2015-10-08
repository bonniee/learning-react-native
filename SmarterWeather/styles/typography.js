'use strict';

var React = require('react-native');
var {
  StyleSheet
} = React;

var baseFontSize = 16;

var styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: baseFontSize + 4,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});

// For use elsewhere...
styles['baseFontSize'] = baseFontSize;

module.exports = styles;