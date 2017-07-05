import { ADD_DECK, ADD_CARD, REVIEW_DECK } from './types';
import Card from '../data/Card';
import Deck from '../data/Deck';

export const addDeck = (name) => {
  return {
    type: ADD_DECK,
    data: new Deck(name)
  }
}

export const addCard = (front, back, deckID) => {
  return {
    type: ADD_CARD,
    data: new Card(front, back, deckID)
  }
}

export const reviewDeck = (deckID) => {
  return {
    type: REVIEW_DECK,
    data: { deckID: deckID }
  }
}