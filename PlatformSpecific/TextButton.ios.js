import React, { Component } from 'react';
import { Button } from 'react-native';

class TextButton extends Component {
  render() {
    return(
      <Button onPress={() => this.props.onPress("It's iOS!")}
        title="Press me"
        color="#383838"
        accessibilityLabel="Press button to change message"/>
      );
  }
}

export default TextButton;