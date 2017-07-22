import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { CreateDeckButton, EnterDeck } from "./DeckCreationFields";

class DeckCreation extends Component {
  constructor(props) {
    super(props);
    this.state = { showingNameField: false };
  }

  _newDeck = name => {
    console.warn("Not implemented");
    this.setState({ showingNameField: false });
  };

  _showField = () => {
    this.setState({ showingNameField: true });
  };

  render() {
    let contents = this.state.showingNameField
      ? <EnterDeck create={this._newDeck} />
      : <CreateDeckButton onPress={this._showField} />;
    return contents;
  }
}

export default DeckCreation;
