var React = require("react-native");
var {
  StyleSheet,
  Text,
  View
} = React;

import ColorButton from './colorbutton';

var CrossPlatform = React.createClass({
  getInitialState() {
    return { bgcolor: "#FFFFEA" };
  },
  _changeColor(val) {
    this.setState({ bgcolor: val });
  },
  render: function() {
    var colorClass = this.state.val
      ? styles.blueContainer
      : styles.redContainer;

      var bgcolorStyle = { backgroundColor: this.state.bgcolor };
    return (
      <View style={[styles.container, bgcolor]}>
        <Text style={styles.welcome}>
          Make me blue!
        </Text>
        <ColorButton onPress={this._changeColor} />
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
