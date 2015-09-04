var Reflux = require('reflux');

var Data = require('./../data/data');
import {DeckActions} from './../actions';
var Deck = require('./../data/Deck');

var CardsStore = require('./CardsStore');

var decksStore = Reflux.createStore({
  init() {
    var data = new Data();
    this._decks = data.loadDecks();
    this.listenTo(CardsStore, this.cardUpdate);
    this.listenTo(DeckActions.createDeck, this.createDeck);
  },
  decks() {
    this.trigger(this._decks);
  },
  cardUpdate(cards) {
  },
  createDeck(name) {
    this._decks.push(new Deck(name));
    this.trigger(this._decks);
  }
});

module.exports = decksStore;
