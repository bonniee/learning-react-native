var md5 = require('md5');

class Review {
  constructor(reviewCard) {
    this.card = reviewCard;
    this.reviewedBack = false;
    this.reviewedFront = false;
    this.correct = null;
  }

  reviewFront(correct) {
    this.reviewedFront = true;
    this._setCorrect(correct);
  }

  reviewBack(correct) {
    this.reviewedBack = true;
    this._setCorrect(correct);
  }

  _setCorrect(correct) {
    if (!correct) {
      this.correct = false;
    }
    if (this.reviewedBack && this.reviewedFront) {
      this.correct = this.correct && correct;
    }
  }

  done() {
    return this.reviewedFront && this.reviewedBack;
  }
}

module.exports = Review;
