const ADD_DECK = 'ADD_DECK';
const ADD_CARD = 'ADD_CARD'


function addCardToDeck(card, deckObj) {
  return {
    meta: deck.meta,
    cards: deck.cards.concat(card)
  }
}

function decksWithNewCard(oldDecks, deckID, card) {
  return oldDecks.map( deck =>
    (deck.meta.id === deckID)
      ? addCardToDeck(card, deck)
      : deck
    )
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_DECK:
      return state.concat( { meta: action.data, cards: [] });
    case ADD_CARD:
      return decksWithNewCard(state, action.data.deckID, action.data);
  }
  return state;
}

export default reducer;