import { createStore } from 'redux';
import{ Provider } from 'react-redux';

import Card from './data/Card';
import Deck from './data/Deck';
import { MockDecks, MockCards } from './data/Mocks';

const initialState = {
  decks: MockDecks.map(mockDeckInfo => {
      return { meta: mockDeckInfo, cards: MockCards }
    }
  )
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DECK:
      return { decks: [ ...state, { meta: action.data, cards: [] }]}
    case ADD_CARD:
      return state.map(deck =>
          (deck.meta.id === action.data.id)
            ? { meta: deck.meta, cards: deck.cards.concat(action.data) }
            : deck
        );
  }
  return state;
}

// Action types
const ADD_DECK = 'ADD_DECK';
const ADD_CARD = 'ADD_CARD'

// Actions

export const addDeck = (name) => {
  return {
    type: ADD_DECK,
    data: new Deck(name)
  }
}

export const addCard = (front, back, deckID) => {
  return {
    type: ADD_CARD,
    data: new Card(front, back, deckID)
  }
}

export { reducer };
