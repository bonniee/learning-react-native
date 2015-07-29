'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;


var LocationButton = React.createClass({
  getInitialState: function() {
    return {
      longitude: '',
      latitude: ''
    }
  },
  _onPress: function() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this.setState({
          longitude: initialPosition.coords.longitude,
          latitude: initialPosition.coords.latitude
        });
      },
      (error) => {alert(error.message)},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this._onPress}>
        <View style={{height: 50, width: 50, backgroundColor: '#FF0000'}}>
          <Text>
            {this.state.longitude} , {this.state.latitude}
          </Text>
        </View>
      </TouchableHighlight>
      );
  }
});

module.exports = LocationButton;