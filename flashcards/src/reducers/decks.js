import { ADD_DECK, ADD_CARD } from "../actions/types";
import Deck from './../data/Deck';

function decksWithNewCard(oldDecks, deckID, card) {
  return oldDecks.map(
    deck => deck.meta.id === deckID ? Deck.addCard(deck, card) : deck
  );
}

const reducer = (state = [], action) => {
  console.warn("Changes are not persisted to disk");

  switch (action.type) {
    case ADD_DECK:
      return state.concat(action.data);
    case ADD_CARD:
      return decksWithNewCard(state, action.data.deckID, action.data);
  }
  return state;
};

export default reducer;
