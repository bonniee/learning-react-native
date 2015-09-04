var React = require('react-native');
var {
  StyleSheet,
  View,
  Text
} = React;

var Button = require('../Button');
var LabeledInput = require('../LabeledInput');

var NewCard = React.createClass({
  propTypes: {
    deckID: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <View>
        <LabeledInput label="Front"/>
        <LabeledInput label="Back"/>
        <Button style={styles.createButton}>
          <Text>Create Card</Text>
        </Button>

        <View style={styles.buttonRow}>
          <Button style={styles.createButton}>
            <Text>Done</Text>
          </Button>

          <Button style={styles.createButton}>
            <Text>Review Deck</Text>
          </Button>
        </View>

      </View>
      );
  }
});

var styles = StyleSheet.create({
  createButton: {
    backgroundColor: '#88FFFF'
  },
  buttonRow: {
    flexDirection: 'row'
  }
});

export default NewCard;
