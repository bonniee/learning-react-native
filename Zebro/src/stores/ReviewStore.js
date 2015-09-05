import Reflux from 'reflux';
import _ from 'lodash';

import {DeckActions} from './../actions';
import CardsStore from './CardsStore';
import DeckMetaStore from './DeckMetaStore';

/**
 * Emits current review batch
 **/

export default Reflux.createStore({
  init() {
    // Info about the state of the app, to track
    this._deckInfos = null;
    this._cards = [];

    // Info about the current deck
    this._currentDeckInfo = null;
    this._currentDeckID = null;

    // The actual reviews, which should be returned
    this._reviews = [];

    this.listenTo(CardsStore, this.cardUpdate);
    this.listenTo(DeckMetaStore, this.deckMetaUpdate);
    this.listenToMany(DeckActions);
  },

  emit() {
    this.trigger(this._reviews);
  },

  _recalculate() {
    // Assume that _currentDeckID, _cards, _currentDeckInfo all up-to-date
    this._updateCurrentDeckInfo();
    this._reviews = this._createReviews(this._qualifyingCards());
    this.emit();
  },

  deckMetaUpdate(deckInfos) {
    this._deckInfos = deckInfos;
    this._updateCurrentDeckInfo();
  },

  _updateCurrentDeckInfo() {
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
    this._recalculate();
  },

  _qualifyingCards() {
    let now = new Date();
    return this._cards.filter((c) => {
      return c.deckID === this._currentDeckID && now >= c.dueDate;
    }, this);
  },

  _createReviews(cards) {
    var makeReview = function(sideOne, sideTwo) {
      return cards.map((card) => {
        return {
          prompt: card[sideOne],
          correctAnswer: card[sideTwo],
          answers: [card.sideTwo].concat(
            _.sample(_.pluck(cards, sideTwo), 4))
        };
      });
    };

    let reviews = makeReview('front', 'back').concat(makeReview('back', 'front'));
    return _.shuffle(reviews);
  },

  onCreateDeck() {
    console.log('onCreateDeck');
  },

  onDeleteDeck() {
    console.log('onDeleteDeck');
  },

  onReviewDeck(deckID) {
    this._currentDeckID = deckID;
    this._recalculate();
  }

});
