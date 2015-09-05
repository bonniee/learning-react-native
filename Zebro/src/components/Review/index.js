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

var Review = React.createClass({
  displayName: 'Review',

  mixins: [Reflux.connect(ReviewStore, 'reviews')],

  propTypes: {
    deckID: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      numReviewed: 0,
      numCorrect: 0
    }
  },

  onReview(correct) {
    if (correct) {
      this.setState({numCorrect: this.state.numCorrect + 1});
    }
    this.setState({numReviewed: this.state.numReviewed + 1});
  },

  componentWillMount() {
    ReviewStore.emit();
  },

  render() {
    return (
      <View>
        <Text>
          {this.props.deckID}
        </Text>
        {
          this.state.reviews && this.state.reviews.length > 0
          ? <ViewCard
              onReview={this.onReview}
              {...this.state.reviews[0]}/>
          : null
        }
      </View>
      );
  }
});

var styles = StyleSheet.create({

});

export default Review;
