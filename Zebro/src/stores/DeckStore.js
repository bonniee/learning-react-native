import Reflux from 'reflux';

import {DeckActions} from './../actions';
import CardsStore from './CardsStore';
import DeckMetaStore from './DeckMetaStore';

export default Reflux.createStore({
  init() {
    this._deckInfos = null;
    this._currentDeckInfo = null;
    this._currentDeckID = null;
    this._cards = [];

    this.listenTo(CardsStore, this.cardUpdate);
    this.listenTo(DeckMetaStore, this.deckMetaUpdate);
    this.listenToMany(DeckActions);
  },

  deckMetaUpdate(deckInfos) {
    this._deckInfos = deckInfos;
    this._setCurrentDeckInfo();
  },

  _setCurrentDeckInfo() {
    if (this._currentDeckID == null) {
      return;
    }

    // Find the right deckInfo
    var deck = this._deckInfos.filter((d) => {
      return d.id === this._currentDeckID;
    });
    if (deck.length !== 1) {
      return;
    }

    this._currentDeckInfo = deck[0];
  },

  cardUpdate(cards) {
    this._cards = cards;
  },

  onCreateDeck() {
    console.log('onCreateDeck');
  },

  onDeleteDeck() {
    console.log('onDeleteDeck');
  },

  onReviewDeck(deckID) {
    console.log(`onReviewDeck: ${deckID}`);
  }

});
