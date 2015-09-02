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
  render() {
    return ();
  }
});

export default ViewCard;