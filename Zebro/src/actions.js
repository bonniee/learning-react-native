import Reflux from 'reflux';

module.exports = {
  DeckActions: Reflux.createActions([
    'createDeck',
    'deleteDeck',
    'reviewDeck'
  ]),
  CardActions: Reflux.createActions([
    'createCard',
    'deleteCard',
    'reviewCard',
    'editCard'
  ])
};
