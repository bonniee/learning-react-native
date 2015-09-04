var React = require('react-native');
var {
  StyleSheet,
  View,
  Text
} = React;

var Button = require('../Button');

var NewCard = React.createClass({
  propTypes: {
    deckID: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <View>
        <Button style={styles.createButton}>
          <Text>Create Card</Text>
        </Button>
      </View>
      );
  }
});

var styles = StyleSheet.create({
  createButton: {
    backgroundColor: '#88FFFF'
  }
});

export default NewCard;
