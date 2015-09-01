var Reflux = require('reflux');

var Data = require('./../data/data');
var actions = require('./../actions');
var Deck = require('./../data/Deck');

var CardsStore = require('./CardsStore');

var decksStore = Reflux.createStore({
  init() {
    var data = new Data();
    this._decks = data.loadDecks();
    console.log(this._decks);
    this.listenTo(CardsStore, this.cardUpdate);
    this.listenTo(actions.addDeck, this.addDeck);
  },
  decks() {
    console.log('triggering');
    this.trigger(this._decks);
  },
  cardUpdate(cards) {
    console.log('got new cards in DeckMetaStore');
    console.log(cards);
  },
  addDeck(name) {
    this._decks.push(Deck(name));
    this.trigger(this._decks);
  }
});

module.exports = decksStore;
