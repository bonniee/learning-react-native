var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Navigator
} = React;

import Reflux from 'reflux';
var {DeckActions} = require('./src/actions');

var Decks = require('./src/components/Decks');
var Review = require('./src/components/Review');
var NewCard = require('./src/components/NewCard');

var CardsStore = require('./src/stores/CardsStore');
var DeckMetaStore = require('./src/stores/DeckMetaStore');

var Zebro = React.createClass({
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
