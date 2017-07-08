import { MockDecks, MockCards } from "./../data/Mocks";

import DecksReducer from "./decks";
import ReviewReducer, { mkReviewState } from "./reviews";

const initialState = () => {
  return { decks: MockDecks, currentReview: mkReviewState() };
};

export const reducer = (state = initialState(), action) => {
  let decks = DecksReducer(state.decks, action);

  return {
    decks: decks,
    currentReview: ReviewReducer(state.currentReview, action, decks)
  };
};
