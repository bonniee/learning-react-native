var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var Reflux = require('reflux');
var DeckMetaStore = require('./../../stores/DeckMetaStore');

var Deck = require('./Deck');

var Button = React.createClass({
  propTypes: {
    onPress: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={[styles.button, this.props.styles]}>
        {this.props.children}
      </TouchableHighlight>
      );
  }
});

var Decks = React.createClass({
  mixins: [Reflux.listenTo(DeckMetaStore, 'onDecksChange')],

  getInitialState() {
    return {
      decks: []
    };
  },

  componentDidMount() {
    DeckMetaStore.decks();
  },

  onDecksChange(decks) {
    this.setState({
      decks: decks
    });
  },

  review(deckName) {
    console.log('review ' + deckName);
    // TODO
  },

  _getDecks() {
    if (!this.state.decks) {
      return null;
    }

    return this.state.decks.map((deck) => {
      return <Deck name={deck.name} onReview={this.review} />;
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <Text>Decks</Text>
        {this._getDecks()}
        <Button styles={styles.wideButton}>
          <Text>Create Deck</Text>
        </Button>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEDD',
  },
  wideButton: {
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    margin: 10
  },
  button: {
    backgroundColor: '#FFFF00'
  }
});

module.exports = Decks;
