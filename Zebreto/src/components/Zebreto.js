import React from 'react-native';
var {
  StyleSheet,
  View,
  Navigator
} = React;

import Reflux from 'reflux';

import {DeckActions} from './../actions';

import Decks from './Decks';
import Review from './Review';
import NewCard from './NewCard';
import Heading from './Header';

import CardsStore from './../stores/CardsStore';
import DeckMetaStore from './../stores/DeckMetaStore';

var Zebreto = React.createClass({
  displayName: 'Zebreto',

  mixins: [Reflux.connect(DeckMetaStore, 'deckMetas')],

  componentWillMount() {
    CardsStore.emit();
  },

  review(deckID) {
    DeckActions.reviewDeck(deckID);
    this.refs.navigator.push({
      name: 'review',
      data: {
        deckID: deckID
      }
    });
  },

  createdDeck(deck) {
    this.refs.navigator.push({
      name: 'createCards',
      data: {
        deck: deck
      }
    });
  },

  goHome() {
    this.refs.navigator.popToTop();
  },

  _renderScene(route) {
    switch (route.name) {
    case 'decks':
      return <Decks review={this.review}
        createdDeck={this.createdDeck}/>;
    case 'createCards':
      return <NewCard
        review={this.review}
        quit={this.goHome}
        nextCard={this.createdDeck}
        {...route.data}/>;
    case 'review':
      return <Review quit={this.goHome} {...route.data} />;
    default:
      console.error('Encountered unexpected route: ' + route.name);
    }
    return <Decks/>;
  },

  render() {
    return (
      <View style={styles.container}>
        <Heading/>
        <Navigator
          ref='navigator'
          initialRoute={{name: 'decks'}}
          renderScene={this._renderScene}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
});

export default Zebreto;
