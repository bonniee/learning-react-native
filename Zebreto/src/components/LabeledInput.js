import React from 'react-native';

var {
  StyleSheet,
  View
} = React;

import Input from './Input';
import NormalText from './NormalText';

var LabeledInput = React.createClass({
  propTypes: {
    onEntry: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func,
    inputStyle: View.propTypes.style,
    label: React.PropTypes.string.isRequired,
    clearOnSubmit: React.PropTypes.bool
  },
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
});

var styles = StyleSheet.create({
  label: {
    paddingLeft: 10
  },
  wrapper: {
    padding: 5
  }
});

export default LabeledInput;
