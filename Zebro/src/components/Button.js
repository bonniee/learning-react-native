var React = require('react-native');
var {
  StyleSheet,
  View,
  TouchableHighlight
} = React;

var Button = React.createClass({
  propTypes: {
    onPress: React.PropTypes.func.isRequired,
    style: View.propTypes.style,
    children: React.PropTypes.object
  },

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={[styles.wideButton, this.props.style]}>
        {this.props.children}
      </TouchableHighlight>
      );
  }
});

export default Button;

var styles = StyleSheet.create({
  wideButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    margin: 10
  }
});
