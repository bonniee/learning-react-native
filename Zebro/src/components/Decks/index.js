var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var Deck = require('./Deck');

var Decks = React.createClass({
  review: function(deckName) {
    console.log('review ' + deckName);
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Decks</Text>
        <Deck name="Esperanto Words"
              onReview={this.review} />
        <Deck name="JLPT N5 Kanji"
              onReview={this.review} />
      </View>
      );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEDD',
  }
})

module.exports = Decks;
