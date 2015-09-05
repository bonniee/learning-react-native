import React from 'react-native';
var {
  StyleSheet,
  Text,
  View
} = React;

import Button from './../Button';

var ViewCard = React.createClass({
  displayName: 'ViewCard',

  propTypes: {
    onReview: React.PropTypes.func.isRequired,
    answers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    correctAnswer: React.PropTypes.string.isRequired,
    prompt: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      showingAnswer: false,
      wasCorrect: null
    };
  },

  _selectAnswer(correct) {
    this.props.onReview(correct);
    this.setState({
      showingAnswer: true,
      wasCorrect: correct
    });
  },

  _buttons() {
    if (!this.props.answers) {
      return null;
    }

    return this.props.answers.map((a) => {
      return (
        <Button
          key={a}
          disabled={this.state.showingAnswer}
          style={styles.options}
          onPress={this._selectAnswer.bind(this, a === this.props.correctAnswer)}>
          <Text>
            {a}
          </Text>
        </Button>
        );
    });
  },
  render() {
    var buttons = this._buttons();
    return (
      <View>
        <Text>{this.props.prompt}</Text>
        {buttons}
      </View>
      );
  }
});

var styles = StyleSheet.create({
  options: {
    backgroundColor: '#FF8888'
  }
});

export default ViewCard;