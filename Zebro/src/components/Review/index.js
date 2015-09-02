import React from 'react-native';
var {
  StyleSheet,
  View,
  Text
} = React;
import Reflux from 'reflux';

import DeckStore from './../../stores/DeckStore';

var Review = React.createClass({
  mixins: [Reflux.connect(DeckStore, 'currentDeck')],
  propTypes: {
    deckID: React.PropTypes.string.isRequired
  },
  componentWillMount() {
    DeckStore.emit();
  },
  render() {
    console.log('rendring Review');
    console.log(this.state.currentDeck);
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
