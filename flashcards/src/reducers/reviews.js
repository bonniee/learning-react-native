import moment from "moment";
import Review from "./../data/PerCardReview";
import { mkReviews } from "./../data/QuizCardView";
import {
  REVIEW_DECK,
  REVIEW_CARD,
  NEXT_REVIEW,
  STOP_REVIEW
} from "./../actions/types";

export const mkReviewState = (
  deckID = null,
  cardStates = [],
  questions = [],
  currentQuestionIndex = 0
) => {
  return { deckID, cardStates, questions, currentQuestionIndex };
};

function findDeck(decks, id) {
  return decks.find(d => {
    return d.meta.id == id;
  });
}

function dueCards(deck) {
  let now = moment();
  return deck.cards.filter(card => {
    return moment.now() >= card.dueDate;
  });
}

function generateReviews(deck) {
  let due = dueCards(deck);
  let reviews = due.map(card => new Review(card));
  let quizCardViews = mkReviews(due);

  return mkReviewState(deck.meta.id, reviews, quizCardViews, 0);
}

function reviewCard(reviewState, action, decks) {
  console.warn("Reviews are not persisted");
  return mkReviewState(
    reviewState.deckID,
    reviewState.cardStates, // TODO: Update card state
    reviewState.questions,
    reviewState.currentQuestionIndex
  );
}

function nextReview(state) {
  return mkReviewState(
    state.deckID,
    state.cardStates,
    state.questions,
    state.currentQuestionIndex + 1
  );
}

const reducer = (state = mkReviewstate(), action, decks) => {
  switch (action.type) {
    case REVIEW_DECK:
      return generateReviews(findDeck(decks, action.data.deckID));
    case REVIEW_CARD:
      return reviewCard(state, action, decks);
    case NEXT_REVIEW:
      return nextReview(state);
    case STOP_REVIEW:
      return mkReviewState();
  }
  return state;
};

export default reducer;
