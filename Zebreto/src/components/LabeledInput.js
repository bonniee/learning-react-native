import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import Input from './Input';
import NormalText from './NormalText';

class LabeledInput extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <NormalText style={styles.label}>
          {this.props.label}:
        </NormalText>
        <Input
          onEntry={this.props.onEntry}
          onChange={this.props.onChange}
          clearOnSubmit={this.props.clearOnSubmit}
          style={[this.props.inputStyle, styles.input]}/>
      </View>
    );
  }
}

LabeledInput.propTypes = {
  onEntry: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func,
  inputStyle: View.propTypes.style,
  label: React.PropTypes.string.isRequired,
  clearOnSubmit: React.PropTypes.bool
};

const styles = StyleSheet.create({
  label: {
    textAlign: 'left',
    paddingLeft: 10
  },
  wrapper: {
    padding: 5
  }
});

export default LabeledInput;
