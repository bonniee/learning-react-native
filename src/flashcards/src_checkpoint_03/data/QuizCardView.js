import _ from "lodash";

class QuizCardView {
  constructor(orientation, cardID, prompt, correctAnswer, answers) {
    this.orientation = orientation;
    this.cardID = cardID;
    this.prompt = prompt;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
  }
}

function mkReviews(cards) {
  let makeReviews = function(sideOne, sideTwo) {
    return cards.map(card => {
      let others = cards.filter(other => {
        return other.id !== card.id;
      });

      let answers = _.shuffle(
        [card[sideTwo]].concat(_.sampleSize(_.map(others, sideTwo), 3))
      );

      return new QuizCardView(
        sideOne,
        card.id,
        card[sideOne],
        card[sideTwo],
        answers
      );
    });
  };

  let reviews = makeReviews("front", "back").concat(
    makeReviews("back", "front")
  );
  return _.shuffle(reviews);
}

export { mkReviews, QuizCardView };
