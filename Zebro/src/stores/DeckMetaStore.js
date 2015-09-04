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

  emit() {
    this.trigger(this._decks);
  },

  cardUpdate(cards) {
    let deckMap = {};
    this._decks.forEach((d) => {
      d.resetCounts();
      deckMap[d.id] = d;
    });

    let now = new Date();
    cards.forEach((card) => {
      if (card.deckID in deckMap) {
        deckMap[card.deckID].totalCards++;
        if (card.dueDate <= now) {
          deckMap[card.deckID].dueCards++;
        }
      }
    });
    this.emit();
  },

  createDeck(name) {
    this._decks.push(new Deck(name));
    this.trigger(this._decks);
  }
});

module.exports = decksStore;
