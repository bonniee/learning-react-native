import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import colors from './../styles/colors';
import {fonts} from './../styles/fonts';

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _create = () => {
    this.props.onEntry(this.state.text);
    this.setState({text: ''});
  }

  _onSubmit = (ev) => {
    this.props.onEntry(ev.nativeEvent.text);
    if (!!this.props.clearOnSubmit) {
      this.setState({text: ''});
    }
  }

  _onChange = (text) => {
    this.setState({text: text});
    if (this.props.onChange) {
      this.props.onChange(text);
    }
  }

  render() {
    return (
      <TextInput
        style={[
          styles.nameField,
          styles.wideButton,
          fonts.normal,
          this.props.style]}
        ref="newDeckInput"
        multiline={false}
        value={this.state.text}
        autoCorrect={false}
        onChangeText={this._onChange}
        onSubmitEditing={this._onSubmit}/>
      );
  }
}

Input.propTypes = {
  onEntry: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func,
  style: View.propTypes.style,
  clearOnSubmit: React.PropTypes.bool
}

Input.defaultProps = {
  clearOnSubmit: true
}

export default Input;

const styles = StyleSheet.create({
  nameField: {
    backgroundColor: colors.tan,
    height: 60
  },
  wideButton: {
    padding: 10,
    margin: 10
  }
});
