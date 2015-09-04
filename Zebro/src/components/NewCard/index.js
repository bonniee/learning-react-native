var React = require('react-native');
var {
  AppRegistry,
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
        <Button>
          <Text>New Card</Text>
        </Button>
      </View>
      );
  }
});

export default NewCard;
