import React, { Component } from "react";
import { View } from "react-native";

import { MockDecks } from "./../../data/Mocks";
import Deck from "./Deck";
import DeckCreation from "./DeckCreation";

class DecksScreen extends Component {
  static displayName = "DecksScreen";

  static navigationOptions = { title: "All Decks" };

  constructor(props) {
    super(props);
    this.state = { decks: MockDecks };
  }

  _createDeck = () => {
    console.warn("Data saving not implemented");
    this.props.navigation.navigate("CardCreation");
  };

  _addCards = () => {
    console.warn("Data saving not implemented");
    this.props.navigation.navigate("CardCreation");
  };

  _review = () => {
    console.warn("Actual reviews not implemented");
    this.props.navigation.navigate("Review");
  };

  _mkDeckViews() {
    if (!this.state.decks) {
      return null;
    }

    return this.state.decks.map(deck => {
      return (
        <Deck
          deck={deck}
          count={deck.cards.length}
          key={deck.id}
          add={this._addCards}
          review={this._review}
        />
      );
    });
  }

  render() {
    return (
      <View>
        {this._mkDeckViews()}
        <DeckCreation create={this._createDeck} />
      </View>
    );
  }
}

export default DecksScreen;
