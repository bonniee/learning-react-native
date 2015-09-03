import React from 'react-native';
var {
  Stylesheet,
  Text,
  View
} = React;

var ViewCard = React.createClass({
  propTypes: {
    answers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    correctAnswer: React.PropTypes.string.isRequired,
    prompt: React.PropTypes.string.isRequired
  },
  _buttons() {
    if (!this.props.answers) {
      return null;
    }

    return this.props.answers.map((a) => {
      return (
        <Text key={a}>
          {a}
        </Text>
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

export default ViewCard;