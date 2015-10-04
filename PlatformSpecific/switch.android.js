var React = require('react-native');
var {
  StyleSheet,
  SwitchAndroid
} = React;

var Switch = React.createClass({
  getInitialState() {
    return {value: false};
  },

  _onValueChange(value) {
    this.setState({value: value});
    if (this.props.onValueChange) {
      this.props.onValueChange(value);      
    }
  },

  render() {
    return (
      <SwitchAndroid
        onValueChange={this._onValueChange}
        value={this.state.value}/>
      );
  }
});

module.exports = Switch;