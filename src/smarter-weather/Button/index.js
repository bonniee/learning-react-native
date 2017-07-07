import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import styles from './style';

class Button extends Component {
  propTypes: {
    onPress: React.PropTypes.func,
    label: React.PropTypes.string
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={[styles.button, this.props.style]}>
          <Text>
            {this.props.label}
          </Text>
        </View>
      </TouchableHighlight>
      );
  }
}

export default Button;
