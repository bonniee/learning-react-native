import { ADD_DECK, ADD_CARD } from "../actions/types";

function addCardToDeck(card, deck) {
  return { meta: deck.meta, cards: deck.cards.concat(card) };
}

function decksWithNewCard(oldDecks, card) {
  return oldDecks.map(deck => {
    if (deck.id === card.deckID) {
      deck.addCard(card);
      return deck;
    } else {
      return deck;
    }
  });
}

const reducer = (state = [], action) => {
  console.warn("Changes are not persisted to disk");

  switch (action.type) {
    case ADD_DECK:
      return state.concat(action.data);
    case ADD_CARD:
      return decksWithNewCard(state, action.data);
  }
  return state;
};

export default reducer;
