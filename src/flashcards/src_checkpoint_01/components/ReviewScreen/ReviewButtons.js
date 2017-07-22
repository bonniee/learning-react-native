import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./../Button";
import NormalText from "./../NormalText";
import HeadingText from "./../HeadingText";
import colors from "./../../styles/colors";

class ContinueButton extends Component {
  render() {
    let text = this.props.wasCorrect
      ? "Correct! Next card?"
      : "Oops, not quite. Next card?";
    return (
      <Button onPress={this.props.onPress} style={styles.continueButton}>
        <NormalText>{text}</NormalText>
      </Button>
    );
  }
}

function mkContinueQuitButtons(
  showingAnswer,
  wasCorrect,
  continueFunc,
  quitFunc
) {
  if (showingAnswer) {
    return <ContinueButton onPress={continueFunc} wasCorrect={wasCorrect} />;
  } else {
    return (
      <Button onPress={quitFunc} style={styles.continueButton}>
        <NormalText>Stop Reviewing</NormalText>
      </Button>
    );
  }
}

function mkAnswerButtons(
  answers,
  correctAnswer,
  showingAnswer,
  wasCorrect,
  selectAnswerFunc
) {
  if (!answers) return null;

  return answers.map(a => {
    let isCorrectAnswer = a === correctAnswer;
    let buttonStyle = [styles.options];
    if (showingAnswer && isCorrectAnswer) {
      if (wasCorrect) {
        buttonStyle.push(styles.rightAnswer);
      } else {
        buttonStyle.push(styles.wrongAnswer);
      }
    }

    return (
      <Button
        key={a}
        disabled={showingAnswer}
        style={buttonStyle}
        onPress={() => {
          selectAnswerFunc(isCorrectAnswer);
        }}
      >
        <NormalText>
          {a}
        </NormalText>
      </Button>
    );
  });
}

const styles = StyleSheet.create({
  options: { backgroundColor: "#FFFFFF" },
  continueButton: { backgroundColor: colors.tan },
  rightAnswer: { backgroundColor: colors.green },
  wrongAnswer: { backgroundColor: colors.pink }
});

export { mkContinueQuitButtons, mkAnswerButtons };
