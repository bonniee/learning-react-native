var md5 = require('md5');

class Card {
  constructor(front, back, deckID) {
    this.front = front;
    this.back = back;
    this.deckID = deckID;
    this.strength = 0;
    this.dueDate = new Date();
    this.id = md5(front + back + deckID);
  }
}

module.exports = Card;
