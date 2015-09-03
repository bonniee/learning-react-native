var Deck = require('./Deck');
var Card = require('./Card');

var SQLite = require('react-native-sqlite');


class Data {
  constructor() {
    var d = new Deck('Esperanto Vocabulary');
    this.decks = [
      d
    ];
    this.cards = [
      new Card('saluton', 'hello', d.id),
      new Card('ĝis', 'bye', d.id)
    ];
  }

  loadDecks() {
    return this.decks;
  }

  loadCards() {
    return this.cards;
  }
}

module.exports = Data;
