
var React = require('react-native');
var PressDemo = require('./PressDemo');
var PanDemo = require('./PanDemo');

var {
  AppRegistry
} = React;


var Touch = React.createClass({
  render: function() {
    return (<PanDemo/>);
  }
});

AppRegistry.registerComponent('Touch', () => Touch);
