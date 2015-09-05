var React = require('react-native');
var {
  StyleSheet,
  View,
  Text
} = React;

import Reflux from 'reflux';
import { CardActions } from './../../actions';

import DeckModel from './../../data/Deck';

var Button = require('../Button');
var LabeledInput = require('../LabeledInput');

var NewCard = React.createClass({
  propTypes: {
    deck: React.PropTypes.instanceOf(DeckModel),
    quit: React.PropTypes.func.isRequired,
    nextCard: React.PropTypes.func.isRequired,
    review: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      font: '',
      back: ''
    };
  },

  _handleFront(text) {
    this.setState({front: text});
  },

  _handleBack(text) {
    this.setState({back: text});
  },

  _createCard() {
    CardActions.createCard(this.state.front,
      this.state.back,
      this.props.deck.id);
    this.props.nextCard(this.props.deck);
  },

  _reviewDeck() {
    this.props.review(this.props.deck.id);
  },

  render() {
    return (
      <View>

        <LabeledInput
          label="Front"
          clearOnSubmit={false}
          onEntry={this._handleFront}
          onChange={this._handleFront}/>
        <LabeledInput
          label="Back"
          clearOnSubmit={false}
          onEntry={this._handleBack}
          onChange={this._handleBack}/>

        <Button style={styles.createButton}
          onPress={this._createCard}>
          <Text>Create Card</Text>
        </Button>

        <View style={styles.buttonRow}>
          <Button style={styles.createButton}
            onPress={this.props.quit}>
            <Text>Done</Text>
          </Button>

          <Button style={styles.createButton}
            onPress={this._reviewDeck}>
            <Text>Review Deck</Text>
          </Button>
        </View>

      </View>
      );
  }
});

var styles = StyleSheet.create({
  createButton: {
    backgroundColor: '#88FFFF'
  },
  buttonRow: {
    flexDirection: 'row'
  }
});

export default NewCard;
