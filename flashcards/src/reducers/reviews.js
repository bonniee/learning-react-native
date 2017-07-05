import moment from 'moment';
import Review from './../data/PerCardReview';
import { mkReviews } from './../data/QuizCardView';
import { REVIEW_DECK } from './../actions/types';

function findDeck(decks, id) {
  return decks.find((d) => {
    return d.meta.id == id
  });
}

function dueCards(deck) {
  let now = moment()
  return deck.cards.filter((card) => {
    return moment.now() >= card.dueDate;
  });
}

function generateReviews(deck) {
  let due = dueCards(deck);
  let reviews = due.map(card => new Review(card));
  let quizCardViews = mkReviews(due);

  return {
    deckID: deck.meta.id,
    cardStates: reviews,
    questions: quizCardViews
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
      return generateReviews(findDeck(decks, action.data.deckID));
  }
  return state;
}

export default reducer;