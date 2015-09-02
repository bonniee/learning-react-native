import Reflux from 'reflux';

export var DeckActions = Reflux.createActions([
  'createDeck',
  'deleteDeck',
  'reviewDeck'
]);

export var CardActions = Reflux.createActions([
  'createCard',
  'deleteCard',
  'reviewCard',
  'editCard'
]);

