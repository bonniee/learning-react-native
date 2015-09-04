var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var Reflux = require('reflux');
var DeckMetaStore = require('./../../stores/DeckMetaStore');
var { DeckActions } = require('./../../actions');

var Deck = require('./Deck');

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
    DeckActions.createDeck(newDeckName);
    this.props.createdDeck(newDeckName);
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

  render() {
    return (
      <View style={styles.container}>
        <Text>Decks</Text>
        {this._getDecks()}
        <DeckCreation newDeck={this._newDeck}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEDD'
  }
});

module.exports = Decks;
