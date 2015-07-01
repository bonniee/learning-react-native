/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SimpleList = require('./SimpleList');
var BookList = require('./BookListV2');
var {
  AppRegistry
} = React;


var Bestsellers = React.createClass({
  render: function() {
    return (<BookList/>);
  }
})

AppRegistry.registerComponent('Bestsellers', () => Bestsellers);
