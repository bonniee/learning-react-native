import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./../Button";
import NormalText from "./../NormalText";
import Input from "./../Input";

import colors from "./../../styles/colors";

class CreateDeckButton extends Component {
  render() {
    return (
      <Button style={styles.createDeck} onPress={this.props.onPress}>
        <NormalText>Create Deck</NormalText>
      </Button>
    );
  }
}

class EnterDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  _create = () => {
    this.props.create(this.state.text);
  };

  render() {
    return (
      <View>
        <Input
          onEntry={this.props.create}
          onChange={text => {
            this.setState({ text });
          }}
        />
        <CreateDeckButton onPress={this._create} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createDeck: { backgroundColor: colors.green }
});

export { CreateDeckButton, EnterDeck };
