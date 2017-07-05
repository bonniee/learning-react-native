import moment from 'moment';

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

  static newDueDate(strength) {
    let dueDate = moment();
    switch (strength) {
    case 0:
      dueDate.add(1, 'hour');
      break;
    case 1:
      dueDate.add(3, 'hour');
      break;
    case 2:
      dueDate.add(1, 'day');
      break;
    case 3:
      dueDate.add(3, 'day');
      break;
    case 4:
      dueDate.add(1, 'week');
      break;
    case 5:
      dueDate.add(2, 'week');
      break;
    case 6:
      dueDate.add(1, 'month');
      break;
    case 7:
      dueDate.add(4, 'month');
      break;
    case 8:
      dueDate.add(1, 'year');
      break;
    default:
      dueDate.add(3, 'year');
    }
    return dueDate;
  }
}

export default Review;
