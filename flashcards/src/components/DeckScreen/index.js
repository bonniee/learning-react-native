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

  _addCards = () => {
    console.warn("Data saving not implemented");
    this.props.navigation.navigate('CardCreation');
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
          key={deck.id}
          add={this._addCards}
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
  return {
    decks: state.decks.map(deck => deck.meta)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(DecksScreen);