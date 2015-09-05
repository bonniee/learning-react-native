var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var DeckModel = require('./../../data/Deck');

var Button = require('./../Button');

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

        <TouchableHighlight style={styles.deckButton} onPress={this._review}>
          <Text style={styles.deckName}>
            {this.props.deck.name}: {this.props.deck.dueCards} due
          </Text>
        </TouchableHighlight>

        <Button style={styles.editButton}
          onPress={this._addCards}>
          <Text>Add</Text>
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
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#66FF66',
    padding: 5
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
