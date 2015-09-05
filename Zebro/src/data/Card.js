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

  setFromObject(ob) {
    this.front = ob.front;
    this.back = ob.back;
    this.deckID = ob.deckID;
    this.strength = ob.strength;
    this.dueDate = new Date(ob.dueDate);
    this.id = ob.id;
  }

  static fromObject(ob) {
    let c = new Card(ob.front, ob.back, ob.deckID);
    c.setFromObject(ob);
    return c;
  }
}

module.exports = Card;
