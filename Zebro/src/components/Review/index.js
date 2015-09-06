import React from 'react-native';
var {
  StyleSheet,
  View,
  Text
} = React;

import _ from 'lodash';
import Reflux from 'reflux';
import ReviewStore from './../../stores/ReviewStore';
import { CardActions } from './../../actions';

import ViewCard from './ViewCard';
import NormalText from './../NormalText';

var Review = React.createClass({
  displayName: 'Review',

  mixins: [Reflux.connect(ReviewStore, 'reviews')],

  propTypes: {
    deckID: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      numReviewed: 0,
      numCorrect: 0,
      currentReview: 0
    }
  },

  onReview(correct) {
    if (correct) {
      this.setState({numCorrect: this.state.numCorrect + 1});
    }
    this.setState({numReviewed: this.state.numReviewed + 1});
  },

  _nextReview() {
    let newIndex = this.state.currentReview + 1;
    if (this.state.reviews.length > newIndex) {
      this.setState({ currentReview: newIndex });
    }
  },

  componentWillMount() {
    ReviewStore.emit();
  },

  render() {
    return (
      <View>
        <NormalText>{this.state.numReviewed}</NormalText>
        {
          this.state.reviews && this.state.reviews.length > 0
          ? <ViewCard
              onReview={this.onReview}
              continue={this._nextReview}
              {...this.state.reviews[this.state.currentReview]}/>
          : null
        }
      </View>
      );
  }
});

var styles = StyleSheet.create({

});

export default Review;
