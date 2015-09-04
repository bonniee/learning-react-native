import React from 'react-native';
var {
  StyleSheet,
  View,
  Text
} = React;

import _ from 'lodash';
import Reflux from 'reflux';
import ReviewStore from './../../stores/ReviewStore';

import ViewCard from './ViewCard';

var Review = React.createClass({
  mixins: [Reflux.connect(ReviewStore, 'currentDeck')],

  propTypes: {
    deckID: React.PropTypes.string.isRequired
  },

  componentWillMount() {
    ReviewStore.emit();
  },

  generateQuestion() {
    if (!this.state.currentDeck || !this.state.currentDeck.cards) {
      return {};
    }

    // TODO: support recall AND recognition modes
    var card = this.state.currentDeck.cards[0];
    var backs = _.sample(_.pluck(this.state.currentDeck.cards, 'back'), 4);

    return {
      answers: backs,
      correctAnswer: card.back,
      prompt: card.front
    };

  },

  render() {
    console.log('rendering Review');

    var question = this.generateQuestion();
    console.log(question);

    return (
      <View>
        <Text>
          {this.props.deckID}
        </Text>
        <ViewCard {...question}/>
      </View>
      );
  }
});

var styles = StyleSheet.create({

});

export default Review;
