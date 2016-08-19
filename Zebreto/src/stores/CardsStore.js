import Card from './../data/Card';
import Reflux from 'reflux';
import _ from 'lodash';
import {CardActions} from './../actions';

import { AsyncStorage } from 'react-native';

const CARD_KEY = 'zebreto-cards';

var cardsStore = Reflux.createStore({
  init() {
    this._loadCards().done();
    this.listenTo(CardActions.createCard, this.createCard);
    this.listenTo(CardActions.deleteAllCards, this.deleteAllCards);
    this.listenTo(CardActions.editCard, this.editCard);
    this._cards = [];
    this.emit();
  },

  async _loadCards() {
    try {
      var val = await AsyncStorage.getItem(CARD_KEY);
      if (val !== null) {
        this._cards = JSON.parse(val).map((cardObj) => {
          return Card.fromObject(cardObj);
        });
        this.emit();
      }
      else {
        console.info(`${CARD_KEY} not found on disk.`);
      }
    }
    catch (error) {
      console.error('AsyncStorage error: ', error.message);
    }
  },

  async _writeCards() {
    try {
      await AsyncStorage.setItem(CARD_KEY, JSON.stringify(this._cards));
    }
    catch (error) {
      console.error('AsyncStorage error: ', error.message);
    }
  },

  deleteAllCards() {
    this._cards = [];
    this.emit();
  },

  editCard(newCard) {
    // Assume newCard.id corresponds to an existing card.
    let match = _.find(this._cards, (card) => {
      return card.id === newCard.id;
    });
    match.setFromObject(newCard);
    this.emit();

  },

  createCard(front, back, deckID) {
    this._cards.push(new Card(front, back, deckID));
    this.emit();
  },

  emit() {
    this._writeCards().done();
    this.trigger(this._cards);
  }
});

export default cardsStore;
