import React, { Component } from "react";
import { View } from "react-native";

import HeadingText from "./../HeadingText";
import { mkContinueQuitButtons, mkAnswerButtons } from "./ReviewButtons";

class ViewCard extends Component {
  static displayName = "ViewCard";

  _getInitialState() {
    return { showingAnswer: false, wasCorrect: false };
  }

  constructor(props) {
    super(props);
    this.state = this._getInitialState();
  }

  _continue = () => {
    this.setState(this._getInitialState());
    this.props.continue();
  };

  _selectAnswer = correct => {
    this.props.onReview(correct);
    this.setState({ showingAnswer: true, wasCorrect: correct });
  };

  render() {
    return (
      <View>
        <HeadingText>
          {this.props.prompt}
        </HeadingText>
        {mkAnswerButtons(
          this.props.answers,
          this.props.correctAnswer,
          this.state.showingAnswer,
          this.state.wasCorrect,
          this._selectAnswer
        )}
        {mkContinueQuitButtons(
          this.state.showingAnswer,
          this.state.wasCorrect,
          this._continue,
          this.props.quit
        )}
      </View>
    );
  }
}

export default ViewCard;
