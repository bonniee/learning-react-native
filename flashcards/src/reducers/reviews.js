import moment from 'moment';
import Review from './../data/PerCardReview';
import { mkReviews } from './../data/QuizCardView';
import { REVIEW_DECK } from './../actions/types';

function findDeck(decks, id) {
  return decks.find((d) => {
    d.meta.id === id
  });
}

function dueCards(deck) {
  return deck.cards.filter((card) => {
    return now >= c.dudeDate;
  });
}

function generateReviews(deck) {
  let dueCards = dueCards(deck);
  let reviews = dueCards.map(card => new Review(card));
  let quizCardViews = mkReviews(reviews);
  return {
    deckID: deck.meta.id,
    cardStates: reviews,
    quizCardViews: quizCardViews
  }
}

const initialState = {
  deckID: null,
  cardStates: [],
  questions: []
};

const reducer = (state = initialState, action, decks) => {
  switch(action.type) {
    case REVIEW_DECK:
      return generateReviews(findDeck(decks));
  }
  return state;
}

export default reducer;