import { createStore, combineReducers } from 'redux';
import{ Provider } from 'react-redux';
import { MockDecks, MockCards } from './data/Mocks';

import DecksReducer from './reducers/decks';
import ReviewReducer from './reducers/reviews';

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
  let decks = DecksReducer(state.decks, action);
  return {
    decks: decks,
    currentReview: ReviewReducer(state.currentReview, action, decks)
  }
}


