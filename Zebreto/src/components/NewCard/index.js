import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { CardActions } from './../../actions';

import DeckModel from './../../data/Deck';

import Button from '../Button';
import LabeledInput from '../LabeledInput';
import NormalText from '../NormalText';

import colors from './../../styles/colors';

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      front: '',
      back: ''
    };
  }

  _createDisabled() {
    return this.state.front === '' || this.state.back === '';
  }

  _handleFront = (text) => {
    this.setState({front: text});
  }

  _handleBack = (text) => {
    this.setState({back: text});
  }

  _createCard = () => {
    CardActions.createCard(this.state.front,
      this.state.back,
      this.props.deck.id);
    this.props.nextCard(this.props.deck);
  }

  _reviewDeck = () => {
    this.props.review(this.props.deck.id);
  }

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
          disabled={this._createDisabled()}
          onPress={this._createCard}>
          <NormalText>Create Card</NormalText>
        </Button>

        <View style={styles.buttonRow}>
          <Button style={styles.secondaryButton}
            onPress={this.props.quit}>
            <NormalText>Done</NormalText>
          </Button>

          <Button style={styles.secondaryButton}
            onPress={this._reviewDeck}>
            <NormalText>Review Deck</NormalText>
          </Button>
        </View>

      </View>
      );
  }
}

NewCard.propTypes = {
  deck: React.PropTypes.instanceOf(DeckModel),
  quit: React.PropTypes.func.isRequired,
  nextCard: React.PropTypes.func.isRequired,
  review: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  createButton: {
    backgroundColor: colors.green
  },
  secondaryButton: {
    backgroundColor: colors.blue
  },
  buttonRow: {
    flexDirection: 'row'
  }
});

export default NewCard;
