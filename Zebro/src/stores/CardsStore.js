var Data = require('./../data/data');
import Card from './../data/Card';

import Reflux from 'reflux';
import {CardActions} from './../actions';

var cardsStore = Reflux.createStore({
  init() {
    var data = new Data();
    this._cards = data.loadCards();

    this.listenTo(CardActions.createCard, this.createCard);

    this.trigger(this._cards);
  },

  createCard(front, back, deckID) {
    this._cards.push(new Card(front, back, deckID));
    this.emit();
  },

  emit() {
    this.trigger(this._cards);
  }
});

module.exports = cardsStore;
