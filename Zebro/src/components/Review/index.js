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
import HeadingText from './../HeadingText';

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
    this.setState({
      currentReview: this.state.currentReview + 1
    });
  },

  componentWillMount() {
    ReviewStore.emit();
  },

  _contents() {
    if (!this.state.reviews || this.state.reviews.length === 0) {
      return null;
    }

    if (this.state.currentReview < this.state.reviews.length) {
      return (
        <ViewCard
          onReview={this.onReview}
          continue={this._nextReview}
          {...this.state.reviews[this.state.currentReview]}
          />
        );
    }

    else {
      let percent = this.state.numCorrect / this.state.numReviewed;
      return (
        <View>
          <HeadingText>Reviews cleared!</HeadingText>
          <NormalText>{Math.round(percent * 100)}% correct</NormalText>
        </View>
        );
    }
  },

  render() {
    return (
      <View>
        <NormalText>{this.state.numReviewed}</NormalText>
        {this._contents()}
      </View>
      );
  }
});

var styles = StyleSheet.create({

});

export default Review;
