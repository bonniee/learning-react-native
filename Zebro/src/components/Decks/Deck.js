var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var DeckModel = require('./../../data/Deck');

var Deck = React.createClass({
  propTypes: {
    onReview: React.PropTypes.func.isRequired,
    deck: React.PropTypes.instanceOf(DeckModel)
  },
  _review() {
    this.props.onReview(this.props.deck.id);
  },
  render() {
    return (
      <View style={styles.deckGroup}>

        <TouchableHighlight style={styles.deckButton} onPress={this._review}>
          <Text style={styles.deckName}>
            {this.props.deck.name}: {this.props.deck.dueCards} due
          </Text>
        </TouchableHighlight>

        <View style={styles.editButton}>
          <Text style={styles.edit}>
            Edit
          </Text>
        </View>
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
    alignItems: 'center'
  },
  edit: {

  }
});

module.exports = Deck;
