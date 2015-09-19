import Reflux from 'reflux';

export var DeckActions = Reflux.createActions([
  'createDeck',
  'deleteDeck',
  'reviewDeck',
  'deleteAllDecks'
]);

export var CardActions = Reflux.createActions([
  'createCard',
  'deleteCard',
  'review',
  'editCard',
  'deleteAllCards'
]);
