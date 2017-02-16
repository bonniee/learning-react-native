var React = require("react-native");
var { SwitchIOS } = React;

var Switch = React.createClass({
  getInitialState() {
    return { value: false };
  },
  _onValueChange(value) {
    this.setState({ value: value });
    if (this.props.onValueChange) {
      this.props.onValueChange(value);
    }
  },
  render() {
    return (
      <SwitchIOS onValueChange={this._onValueChange} value={this.state.value} />
    );
  }
});

module.exports = Switch;
