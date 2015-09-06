import React from 'react-native';
var {
  StyleSheet,
  View,
  TouchableOpacity
} = React;

var Button = React.createClass({
  displayName: 'Button',

  propTypes: {
    onPress: React.PropTypes.func.isRequired,
    style: View.propTypes.style,
    children: React.PropTypes.object,
    disabled: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      disabled: false
    };
  },

  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    return (
      <TouchableOpacity
        activeOpacity={opacity}
        onPress={this.props.onPress}
        style={[styles.wideButton, this.props.style]}>
        {this.props.children}
      </TouchableOpacity>
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
