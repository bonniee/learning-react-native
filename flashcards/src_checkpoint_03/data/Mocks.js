import CardModel from "./Card";
import DeckModel from "./Deck";
import { mkReviews } from "./QuizCardView";

let MockCards = [
  new CardModel("der Hund", "the dog", "fakeDeckID"),
  new CardModel("das Kind", "the child", "fakeDeckID"),
  new CardModel("die Frau", "the woman", "fakeDeckID"),
  new CardModel("die Katze", "the cat", "fakeDeckID")
];

let MockCard = MockCards[0];
let MockReviews = mkReviews(MockCards);
let MockDecks = [new DeckModel("French"), new DeckModel("German")];

MockDecks.map(deck => {
  deck.addCard(new CardModel("der Hund", "the dog", deck.id));
  deck.addCard(new CardModel("die Katze", "the cat", deck.id));
  deck.addCard(new CardModel("das Brot", "the bread", deck.id));
  deck.addCard(new CardModel("die Frau", "the woman", deck.id));
  return deck;
});

let MockDeck = MockDecks[0];

export { MockReviews, MockCards, MockCard, MockDecks, MockDeck };
