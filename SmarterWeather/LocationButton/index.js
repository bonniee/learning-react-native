var React = require('react-native');
var {
  Text,
  View,
  TouchableHighlight
} = React;
var styles = require('./style.js');

var LocationButton = React.createClass({
  propTypes: {
    onGetCoords: React.PropTypes.func.isRequired
  },

  _onPress: function() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this.props.onGetCoords(initialPosition.coords.latitude,
          initialPosition.coords.longitude);
      },
      (error) => {alert(error.message)},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this._onPress}>
        <View style={styles.locationButton}>
          <Text>
            Use Current Location
          </Text>
        </View>
      </TouchableHighlight>
      );
  }
});

module.exports = LocationButton;