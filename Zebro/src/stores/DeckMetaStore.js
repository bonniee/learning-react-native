import Reflux from 'reflux';
import moment from 'moment';

import {DeckActions} from './../actions';
import Deck from './../data/Deck';

import { AsyncStorage } from 'react-native';
const DECK_KEY = 'zebreto-decks';

import CardsStore from './CardsStore';

var decksStore = Reflux.createStore({
  init() {
    this._decks = [];
    this._loadDecks().done();

    // Track cards so that we can rebuilt deck metadata
    this._cards = [];
    this.listenTo(CardsStore, this.cardUpdate);
    this.listenTo(DeckActions.createDeck, this.createDeck);
    this.listenTo(DeckActions.deleteAllDecks, this.deleteAllDecks);
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

  deleteAllDecks() {
    this._decks = [];
    this.emit();
  },

  emit() {
    this._writeDecks().done();
    this.trigger(this._decks);
  },

  _recalculateMetaData() {
    let deckMap = {};
    this._decks.forEach((d) => {
      d.resetCounts();
      deckMap[d.id] = d;
    });

    let now = moment();
    this._cards.forEach((card) => {
      if (card.deckID in deckMap) {
        deckMap[card.deckID].totalCards++;
        if (card.dueDate <= now) {
          deckMap[card.deckID].dueCards++;
        }
      }
    });
  },

  cardUpdate(cards) {
    this._cards = cards;
    this._recalculateMetaData();
    this.emit();
  },

  createDeck(deck) {
    this._decks.push(deck);
    this.emit();
  }
});

module.exports = decksStore;
