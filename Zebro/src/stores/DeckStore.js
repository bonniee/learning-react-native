import Reflux from 'reflux';

import {DeckActions} from './../actions';
import CardsStore from './CardsStore';
import DeckMetaStore from './DeckMetaStore';

export default Reflux.createStore({
  init() {
    this._currentDeckInfo = null;
    this._currentDeckID = null;
    this._cards = [];

    this.listenTo(CardsStore, this.cardUpdate);
    this.listenTo(DeckMetaStore, this.deckMetaUpdate);
    this.listenToMany(DeckActions);
  },

  deckMetaUpdate(deckInfos) {
    if (this._currentDeckID == null) {
      return;
    }

    // Find the right deckInfo
    var deck = deckInfos.filter((d) => {
      return d.id === this._currentDeckID
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

  onReviewDeck() {
    console.log('onReviewDeck');
  }

});
