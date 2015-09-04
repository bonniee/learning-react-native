var Deck = require('./Deck');
var Card = require('./Card');

var SQLite = require('react-native-sqlite');


class Data {
  constructor() {
    var d = new Deck('Esperanto Vocabulary');
    var germanDeck = new Deck('German Vocabulary');
    this.decks = [
      d
    ];
    this.cards = [
      new Card('saluton', 'hello', d.id),
      new Card('ĝis', 'bye', d.id),
      new Card('birdo', 'bird', d.id),
      new Card('abelo', 'bee', d.id),
      new Card('vivo', 'to live', d.id),
      new Card('vido', 'to see', d.id),
      new Card('die Mann', 'man', germanDeck.id),
      new Card('die Frau', 'woman', germanDeck.id)
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
