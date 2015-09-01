var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;
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
  propTypes: {
    decks: React.PropTypes.array.isRequired
  },
  review: function(deckName) {
    console.log('review ' + deckName);
  },
  render() {
    return (
      <View style={styles.container}>
        <Text>Decks</Text>
        <Deck name="Esperanto Words"
              onReview={this.review} />
        <Deck name="JLPT N5 Kanji"
              onReview={this.review} />
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
