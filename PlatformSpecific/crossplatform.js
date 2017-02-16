var React = require("react-native");
var {
  StyleSheet,
  Text,
  View
} = React;
var Switch = require("./switch");

var CrossPlatform = React.createClass({
  getInitialState() {
    return { val: false };
  },
  _onValueChange(val) {
    this.setState({ val: val });
  },
  render: function() {
    var colorClass = this.state.val
      ? styles.blueContainer
      : styles.redContainer;
    return (
      <View style={[styles.container, colorClass]}>
        <Text style={styles.welcome}>
          Make me blue!
        </Text>
        <Switch onValueChange={this._onValueChange} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  blueContainer: {
    backgroundColor: "#5555FF"
  },
  redContainer: {
    backgroundColor: "#FF5555"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

module.exports = CrossPlatform;
