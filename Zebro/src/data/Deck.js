var md5 = require('md5');

class Deck {
  constructor(name) {
    this.name = name;
    this.totalCards = 0;
    this.dueCards = 0;
    this.id = md5(name); // LOL temporary
  }

  resetCounts() {
    this.totalCards = 0;
    this.dueCards = 0;
  }
}

module.exports = Deck;
