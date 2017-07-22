import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import ViewCard from "./ViewCard";
import { MockReviews } from "./../../data/Mocks";
import { mkReviewSummary } from "./ReviewSummary";
import colors from "./../../styles/colors";

class ReviewScreen extends Component {
  static displayName = "ReviewScreen";

  static navigationOptions = { title: "Review" };

  constructor(props) {
    super(props);
    this.state = {
      numReviewed: 0,
      numCorrect: 0,
      currentReview: 0,
      reviews: MockReviews
    };
  }

  onReview = correct => {
    if (correct) {
      this.setState({ numCorrect: this.state.numCorrect + 1 });
    }
    this.setState({ numReviewed: this.state.numReviewed + 1 });
  };

  _nextReview = () => {
    console.warn("Showing next review, but data saving not implemented.");
    this.setState({ currentReview: this.state.currentReview + 1 });
  };

  _quitReviewing = () => {
    console.warn("Data saving not implemented");
    this.props.navigation.goBack();
  };

  _contents() {
    if (!this.state.reviews || this.state.reviews.length === 0) {
      return null;
    }

    if (this.state.currentReview < this.state.reviews.length) {
      return (
        <ViewCard
          onReview={this.onReview}
          continue={this._nextReview}
          quit={this._quitReviewing}
          {...this.state.reviews[this.state.currentReview]}
        />
      );
    } else {
      let percent = this.state.numCorrect / this.state.numReviewed;
      return mkReviewSummary(percent, this._quitReviewing);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._contents()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.blue, flex: 1, paddingTop: 24 }
});

export default ReviewScreen;
