import React, { Component } from "react";
import { View } from "react-native";

import { MockDecks } from "./../../data/Mocks";
import Deck from "./Deck";
import DeckCreation from "./DeckCreation";

class DecksScreen extends Component {
  static displayName = "DecksScreen";

  constructor(props) {
    super(props);
    this.state = { decks: MockDecks };
  }

  _mkDeckViews() {
    if (!this.state.decks) {
      return null;
    }

    return this.state.decks.map(deck => {
      return <Deck deck={deck} count={deck.cards.length} key={deck.id} />;
    });
  }

  render() {
    return (
      <View>
        {this._mkDeckViews()}
        <DeckCreation />
      </View>
    );
  }
}

export default DecksScreen;
