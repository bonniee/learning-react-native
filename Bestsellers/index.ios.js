var React = require('react-native');
var {
  AppRegistry
} = React;

var MockBookList = require('./MockBookList');
var BookList = require('./BookList');
var BookListV2 = require('./BookListV2');

// Change this to MockBookList, or BookList, to see the intermediary versions
AppRegistry.registerComponent('Bestsellers', () => BookListV2);
