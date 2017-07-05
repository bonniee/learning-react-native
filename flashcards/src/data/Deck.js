import md5 from 'md5';

class Deck {
  constructor(name) {
    this.name = name;
    this.id = md5("deck:" + name);
    this.cards = []
  }

  setFromObject(ob) {
    this.name = ob.name;
    this.cards = ob.cards
    this.id = ob.id;
  }

  static fromObject(ob) {
    let d = new Deck(ob.name);
    d.setFromObject(ob);
    return d;
  }
}

module.exports = Deck;
