var Reflux = require('reflux');
var Data = require('./../data/data');

var cardsStore = Reflux.createStore({
  init() {
    var data = new Data();
    this._cards = data.loadCards();
  }
});

module.exports = cardsStore;
