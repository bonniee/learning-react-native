var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var Reflux = require('reflux');
var DeckMetaStore = require('./../../stores/DeckMetaStore');
var { DeckActions, CardActions } = require('./../../actions');
import DeckModel from './../../data/Deck';

var Deck = require('./Deck');
var Button = require('./../Button');

var DeckCreation = require('./DeckCreation');

var Decks = React.createClass({
  mixins: [Reflux.listenTo(DeckMetaStore, 'onDecksChange')],

  getInitialState() {
    return {
      decks: []
    };
  },

  componentDidMount() {
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
        <Text>Decks</Text>
        {this._getDecks()}
        <DeckCreation newDeck={this._newDeck}/>
        <Button style={styles.buttons} onPress={this.deleteAll}>
          <Text>Delete All the Things</Text>
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
  }
});

module.exports = Decks;
