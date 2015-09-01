var Reflux = require('reflux');
var Data = require('./../data/data');

var cardsStore = Reflux.createStore({
  init() {
    console.log('init CardsStore');
    var data = new Data();
    this._cards = data.loadCards();
    console.log(this._cards);
    this.trigger(this._cards);
  },
  start() {
    this.trigger(this._cards);
  }
});

module.exports = cardsStore;
