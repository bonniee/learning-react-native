import Reflux from 'reflux';

import Data from './../data/data';
import {DeckActions} from './../actions';
import Deck from './../data/Deck';

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

  createDeck(deck) {
    this._decks.push(deck);
    this.trigger(this._decks);
  }
});

module.exports = decksStore;
