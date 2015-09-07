import React from 'react-native';
var {
  AppRegistry,
  StyleSheet,
  View,
  Navigator
} = React;

import Reflux from 'reflux';

import {DeckActions} from './src/actions';

import Decks from './src/components/Decks';
import Review from './src/components/Review';
import NewCard from './src/components/NewCard';

import CardsStore from './src/stores/CardsStore';
import DeckMetaStore from './src/stores/DeckMetaStore';

var Zebro = React.createClass({
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
      return <Review {...route.data} />;
    default:
      console.error('Encountered unexpected route: ' + route.name);
    }
    return <Decks/>;
  },

  render() {
    return (
      <View style={styles.container}>
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
    backgroundColor: '#F5FCFF',
    marginTop: 30
  }
});

AppRegistry.registerComponent('Zebro', () => Zebro);
