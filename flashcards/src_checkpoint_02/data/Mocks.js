import CardModel from "./Card";
import DeckModel from "./Deck";
import { mkReviews } from "./Reviews";

let MockCards = [
  new CardModel("der Hund", "the dog", "fakeDeckID"),
  new CardModel("das Kind", "the child", "fakeDeckID"),
  new CardModel("die Frau", "the woman", "fakeDeckID"),
  new CardModel("der Apfel", "the apple", "fakeDeckID"),
  new CardModel("die Katze", "the cat", "fakeDeckID")
];

let MockCard = MockCards[0];
let MockReviews = mkReviews(MockCards);
let MockDecks = [new DeckModel("French"), new DeckModel("German")];
let MockDeck = MockDecks[0];

export { MockReviews, MockCards, MockCard, MockDecks, MockDeck };
