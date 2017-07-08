import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { connect } from "react-redux";
import ViewCard from "./ViewCard";
import { mkReviewSummary } from "./ReviewSummary";
import colors from "./../../styles/colors";
import { reviewCard, nextReview, stopReview } from "./../../actions/creators";

class ReviewScreen extends Component {
  static displayName = "ReviewScreen";

  static navigationOptions = { title: "Review" };

  constructor(props) {
    super(props);
    this.state = { numReviewed: 0, numCorrect: 0 };
  }

  onReview = correct => {
    if (correct) {
      this.setState({ numCorrect: this.state.numCorrect + 1 });
    }
    this.setState({ numReviewed: this.state.numReviewed + 1 });
  };

  _nextReview = () => {
    this.props.nextReview();
  };

  _quitReviewing = () => {
    this.props.stopReview();
    this.props.navigation.goBack();
  };

  _contents() {
    if (!this.props.reviews || this.props.reviews.length === 0) {
      return null;
    }

    if (this.props.currentReview < this.props.reviews.length) {
      return (
        <ViewCard
          onReview={this.onReview}
          continue={this._nextReview}
          quit={this._quitReviewing}
          {...this.props.reviews[this.props.currentReview]}
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

const mapDispatchToProps = dispatch => {
  return {
    nextReview: () => {
      dispatch(nextReview());
    },
    stopReview: () => {
      dispatch(stopReview());
    }
  };
};

const mapStateToProps = state => {
  return {
    reviews: state.currentReview.questions,
    currentReview: state.currentReview.currentQuestionIndex
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);
