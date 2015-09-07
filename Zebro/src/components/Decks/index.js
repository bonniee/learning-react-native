import React from 'react-native';
var {
  StyleSheet,
  View
} = React;

import Reflux from 'reflux';
import DeckMetaStore from './../../stores/DeckMetaStore';
import CardsStore from './../../stores/CardsStore';
import { DeckActions, CardActions } from './../../actions';
import DeckModel from './../../data/Deck';

import Deck from './Deck';
import Button from './../Button';
import NormalText from './../NormalText';
import HeadingText from './../HeadingText';

import DeckCreation from './DeckCreation';

var Decks = React.createClass({
  displayName: 'Decks',

  mixins: [Reflux.listenTo(DeckMetaStore, 'onDecksChange')],

  getInitialState() {
    return {
      decks: []
    };
  },

  propTypes: {
    createdDeck: React.PropTypes.func.isRequired,
    review: React.PropTypes.func.isRequired
  },

  componentDidMount() {
    CardsStore.emit();
    DeckMetaStore.emit();
  },

  onDecksChange(decks) {
    this.setState({
      decks: decks
    });
  },

  _newDeck(newDeckName) {
    let deck = new DeckModel(newDeckName);
    DeckActions.createDeck(deck);
    this.props.createdDeck(deck);
  },

  _getDecks() {
    if (!this.state.decks) {
      return null;
    }

    return this.state.decks.map((deck) => {
      return (
        <Deck
          deck={deck}
          addCards={this.props.createdDeck}
          onReview={this.props.review}
          key={deck.id} />);
    });
  },

  deleteAll() {
    DeckActions.deleteAllDecks();
    CardActions.deleteAllCards();
  },

  render() {
    return (
      <View style={styles.container}>
        {this._getDecks()}
        <DeckCreation newDeck={this._newDeck}/>
        <Button style={styles.buttons} onPress={this.deleteAll}>
          <NormalText>Delete All the Things</NormalText>
        </Button>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEDD'
  },
  buttons: {
    backgroundColor: '#FF88FF'
  },
  heading: {
    padding: 10
  }
});

module.exports = Decks;
