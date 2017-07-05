import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { connect } from 'react-redux';
import ViewCard from './ViewCard';
import { mkReviewSummary } from './ReviewSummary';
import colors from './../../styles/colors';

class ReviewScreen extends Component {

  static displayName = 'ReviewScreen';

  static navigationOptions = {
    title: 'Review'
  };

  constructor(props) {
    super(props);
    this.state = {
      numReviewed: 0,
      numCorrect: 0,
      currentReview: 0,
      reviews: []
    };
  }

  onReview = (correct) => {
    if (correct) {
      this.setState({numCorrect: this.state.numCorrect + 1});
    }
    this.setState({numReviewed: this.state.numReviewed + 1});
  }

  _nextReview = () => {
    console.warn("Showing next review, but data saving not implemented.");
    this.setState({
      currentReview: this.state.currentReview + 1
    });
  }

  _quitReviewing = () => {
    console.warn("Data saving not implemented");
    this.props.navigation.goBack();
  }

  _contents() {
    if (!this.props.reviews || this.props.reviews.length === 0) {
      return null;
    }

    if (this.state.currentReview < this.props.reviews.length) {
      return (
        <ViewCard
          onReview={this.onReview}
          continue={this._nextReview}
          quit={this._quitReviewing}
          {...this.props.reviews[this.state.currentReview]}
          />
        );
    }
    else {
      let percent = this.state.numCorrect / this.state.numReviewed;
      return mkReviewSummary(percent, this._quitReviewing);
    }
  }

  render() {
    console.log("rendering review ?!!!!!!!!")
    console.log(this.props.reviews);
    return (
      <View style={styles.container}>
        {this._contents()}
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    paddingTop: 24
  }
});

const mapDispatchToProps = dispatch => {
  return {};
}

const mapStateToProps = state => {
  console.log("Im looking at state");
  console.log(state.currentReview.questions);
  return {
    reviews: state.currentReview.questions
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ReviewScreen);
