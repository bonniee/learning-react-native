'use strict';

var React = require('react-native');
var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: 30,
    flexDirection: 'column'
  }
});

module.exports = styles;
