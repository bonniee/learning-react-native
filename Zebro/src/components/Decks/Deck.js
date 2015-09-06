import React from 'react-native';
var {
  StyleSheet,
  Text,
  View
} = React;

import DeckModel from './../../data/Deck';

import Button from './../Button';
import NormalText from './../NormalText';
import fonts from './../../styles/fonts';

var Deck = React.createClass({
  displayName: 'Deck',
  propTypes: {
    onReview: React.PropTypes.func.isRequired,
    deck: React.PropTypes.instanceOf(DeckModel),
    addCards: React.PropTypes.func.isRequired
  },
  _review() {
    this.props.onReview(this.props.deck.id);
  },
  _addCards() {
    this.props.addCards(this.props.deck);
  },
  render() {
    return (
      <View style={styles.deckGroup}>

        <Button style={styles.deckButton} onPress={this._review}>
          <NormalText style={styles.deckName}>
            {this.props.deck.name}: {this.props.deck.dueCards} due
          </NormalText>
        </Button>

        <Button style={styles.editButton}
          onPress={this._addCards}>
          <NormalText>Add</NormalText>
        </Button>
      </View>
      );
  }
});

var styles = StyleSheet.create({
  deckGroup: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    alignItems: 'stretch',
    padding: 10
  },
  deckButton: {
    backgroundColor: '#66FF66',
    padding: 0,
    margin: 0
  },
  deckname: {

  },
  editButton: {
    width: 60,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    flex: 0,
  },
  edit: {

  }
});

module.exports = Deck;
