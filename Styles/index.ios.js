'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Mondrian = require('./Mondrian');
var FlexDemo = require('./FlexDemo');

AppRegistry.registerComponent('Styles', () => FlexDemo);
