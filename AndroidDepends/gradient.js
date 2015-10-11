var React = require('react-native');
var {
  StyleSheet,
  Text,
} = React;
var LinearGradient = require('react-native-linear-gradient');

var Gradient = React.createClass({
  render: function() {
    return (
        <LinearGradient colors={['#FFFFFF', '#00A8A8']} style={styles.container}>
          <Text style={styles.welcome}>
            A Lovely Gradient
          </Text>
        </LinearGradient>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 50,
    padding: 20
  }
});

module.exports = Gradient;
