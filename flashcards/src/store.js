import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { MockDecks, MockCards } from "./data/Mocks";

import DecksReducer from "./reducers/decks";
import ReviewReducer, { mkReviewState } from "./reducers/reviews";

const initialState = () => {
  return {
    decks: MockDecks,
    currentReview: mkReviewState()
  };
}

export const reducer = (state = initialState(), action) => {
  let decks = DecksReducer(state.decks, action);

  return {
    decks: decks,
    currentReview: ReviewReducer(state.currentReview, action, decks)
  };
};
