import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { MockDecks, MockCards } from "./data/Mocks";

import DecksReducer from "./reducers/decks";
import ReviewReducer, { mkReviewState } from "./reducers/reviews";

import { readDecks, writeDecks } from './storage/decks';

function loadDecks = () => {
  readDecks().then(decks => {
    console.log("omg we loaded decks!!");
  });
}

const initialState = () => {
  loadDecks();
  return {
    decks: MockDecks.map(mockDeckInfo => {
        return { meta: mockDeckInfo, cards: MockCards };
      }
    ),
    currentReview: mkReviewState()
    }
};

export const reducer = (state = initialState, action) => {
  let decks = DecksReducer(state.decks, action);
  return {
    decks: decks,
    currentReview: ReviewReducer(state.currentReview, action, decks)
  };
};
