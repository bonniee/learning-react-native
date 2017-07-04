import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { connect } from 'react-redux'

import { MockDecks } from './../../data/Mocks';
import Deck from './Deck';
import DeckCreation from './DeckCreation';

class DecksScreen extends Component {
  static displayName = 'DecksScreen';

  static navigationOptions = {
    title: 'All Decks'
  };

  _createDeck = () => {
    console.warn("Data saving not implemented");
    this.props.navigation.navigate('CardCreation');
  }

  _addCards = (deckID) => {
    console.warn("Data saving not implemented");
    this.props.navigation.navigate('CardCreation', {deckID: deckID});
  }

  _review = () => {
    console.warn("Actual reviews not implemented");
    this.props.navigation.navigate('Review');
  }

  _mkDeckViews() {
    if (!this.props.decks) {
      return null;
    }

    return this.props.decks.map((deck) => {
      return (
        <Deck
          deck={deck}
          dueCount={this.props.dueCounts[deck.id]}
          key={deck.id}
          add={() => { this._addCards(deck.id)}}
          review={this._review} />);
    });
  }

  render() {
    return (
      <View>
        {this._mkDeckViews()}
        <DeckCreation create={this._createDeck}/>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {};
}
const mapStateToProps = state => {
  console.log(state)
  return {
    decks: state.decks.map(d => d.meta),
    dueCounts: state.decks.reduce( (sum, deck) => {
        sum[deck.meta.id] = deck.cards.length // TODO
        return sum;
      }, {})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(DecksScreen);
