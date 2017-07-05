import { ADD_DECK, ADD_CARD } from "../actions/types";

function addCardToDeck(card, deck) {
  return { meta: deck.meta, cards: deck.cards.concat(card) };
}

function decksWithNewCard(oldDecks, deckID, card) {
  return oldDecks.map(
    deck => deck.meta.id === deckID ? addCardToDeck(card, deck) : deck
  );
}

const reducer = (state = [], action) => {
  console.warn("Changes are not persisted to disk");

  switch (action.type) {
    case ADD_DECK:
      return state.concat({ meta: action.data, cards: [] });
    case ADD_CARD:
      return decksWithNewCard(state, action.data.deckID, action.data);
  }
  return state;
};

export default reducer;
