import Reflux from 'reflux';

import {DeckActions} from './../actions';
import Deck from './../data/Deck';

import { AsyncStorage } from 'react-native';
const DECK_KEY = 'zebreto-decks';

var CardsStore = require('./CardsStore');

var decksStore = Reflux.createStore({
  init() {
    this._decks = [];
    this._loadDecks().done();
    this.listenTo(CardsStore, this.cardUpdate);
    this.listenTo(DeckActions.createDeck, this.createDeck);
  },

  async _loadDecks() {
    try {
      var val = await AsyncStorage.getItem(DECK_KEY);
      if (val !== null) {
        this._decks = JSON.parse(val).map((deckObj) => {
          return Deck.fromObject(deckObj);
        });
        this.emit();
      }
      else {
        console.info(`${DECK_KEY} not found on disk.`);
      }
    } catch (error) {
      console.error('AsyncStorage error: ', error.message);
    }
  },

  async _writeDecks() {
    try {
      await AsyncStorage.setItem(DECK_KEY, JSON.stringify(this._decks));
    } catch (error) {
      console.error('AsyncStorage error: ', error.message);
    }
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
    this._writeDecks().done();
    this.trigger(this._decks);
  }
});

module.exports = decksStore;
