import React from 'react-native';
var {
  StyleSheet,
  View
} = React;

import DeckModel from './../../data/Deck';

import Button from './../Button';
import NormalText from './../NormalText';

import colors from './../../styles/colors';

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
          <NormalText>
            {this.props.deck.name}: {this.props.deck.dueCards} due
          </NormalText>
        </Button>

        <Button style={styles.editButton}
          onPress={this._addCards}>
          <NormalText>+</NormalText>
        </Button>
      </View>
      );
  }
});

var styles = StyleSheet.create({
  deckGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 10
  },
  deckButton: {
    backgroundColor: colors.pink,
    padding: 10,
    margin: 0,
    flex: 1
  },
  editButton: {
    width: 60,
    backgroundColor: colors.pink2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 0,
    flex: 0
  }
});

module.exports = Deck;
