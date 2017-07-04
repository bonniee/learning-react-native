import { createStore, combineReducers } from 'redux';
import{ Provider } from 'react-redux';

import Card from './data/Card';
import Deck from './data/Deck';
import { MockDecks, MockCards } from './data/Mocks';

import DecksReducer from './reducers/decks';

const initialState = {
  decks: MockDecks.map(mockDeckInfo => {
      return { meta: mockDeckInfo, cards: MockCards }
    }
  ),
  currentReview: {
    deckID: null,
    cardStates: [],
    questions: []
  }
};


export const reducer = (state = initialState, action) => {
  return { decks: DecksReducer(state.decks, action)}
}

// Action types - duped in reducers/decks.js
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


