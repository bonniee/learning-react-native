import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import colors from './../styles/colors';

class Button extends Component {
  static displayName = 'Button';

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
}

Button.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  style: View.propTypes.style,
  children: React.PropTypes.object,
  disabled: React.PropTypes.bool
};

Button.defaultProps = {
  disabled: false
};

export default Button;

const styles = StyleSheet.create({
  wideButton: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.pink
  }
});
