var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var Deck = require('./Deck');

var Decks = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Decks</Text>
        <Deck name="Esperanto Words" />
        <Deck name="JLPT N5 Kanji" />
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
