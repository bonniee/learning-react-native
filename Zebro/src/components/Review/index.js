import React from 'react-native';
var {
  StyleSheet,
  View,
  Text
} = React;

import DeckStore from './../../stores/DeckStore';

var Review = React.createClass({
  propTypes: {
    deckID: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <View>
        <Text>
          {this.props.deckID}
        </Text>
      </View>
      );
  }
});

var styles = StyleSheet.create({

});

export default Review;
