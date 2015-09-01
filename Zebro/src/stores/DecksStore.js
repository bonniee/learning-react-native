var Reflux = require('reflux');

var actions = require('./../actions');
var Deck = require('./Deck');

var decksStore = Reflux.createStore({
  init() {
    this._decks = [];
    this.listenTo(actions.addDeck, this.addDeck);
  },
  addDeck(name) {
    this._decks.push(Deck(name));
    this.trigger(this._decks);
  }
});

module.exports = decksStore;
