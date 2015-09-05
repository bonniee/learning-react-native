var React = require('react-native');

var {
  StyleSheet,
  View,
  Text
} = React;

var Input = require('./Input');

var LabeledInput = React.createClass({
  propTypes: {
    onEntry: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func,
    inputStyle: View.propTypes.style,
    label: React.PropTypes.string.isRequired,
    clearOnSubmit: React.PropTypes.func
  },
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>
          {this.props.label}:
        </Text>
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
