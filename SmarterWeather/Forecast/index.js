var React = require('react-native');
var { Text, View, StyleSheet } = React;
var styles = require('../styles/typography.js');

var Forecast = React.createClass({
  render: function() {
    return (
      <View style={forecastStyles.forecast}>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp}°F
        </Text>
      </View>
    );
  }
});

var forecastStyles = StyleSheet.create({
  forecast: {
    alignItems: 'center'
  }
});

module.exports = Forecast;