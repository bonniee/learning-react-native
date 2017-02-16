import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextButton from './TextButton';

class CrossPlatform extends Component {

  constructor(props) {
    super(props)
    this.state = { text: "Hello, world" };
  }

  _changeText = (val) => {
    this.setState({ text: val });
  }

  render() {
    var bgcolorStyle = { backgroundColor: this.state.bgcolor };
    return (
      <View style={[styles.container, bgcolorStyle]}>
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>
        <TextButton onPress={this._changeText} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

module.exports = CrossPlatform;
