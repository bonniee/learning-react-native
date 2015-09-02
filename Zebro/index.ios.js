/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Navigator
} = React;

var Actions = require('./src/actions');

var Decks = require('./src/components/Decks');
var Review = require('./src/components/Review');

var CardsStore = require('./src/stores/CardsStore');
var DeckMetaStore = require('./src/stores/DeckMetaStore');

var Zebro = React.createClass({
  componentWillMount() {
    CardsStore.start();
    // TODO: fetch deck data from local storage or something
  },

  review(deckID) {
    this.refs.navigator.push({
      name: 'review',
      data: {
        deckID: deckID
      }
    });
  },

  _renderScene(route, navigator) {
    // 'decks', 'review'
    var name = route.name;
    switch (route.name) {
    case 'decks':
      return <Decks review={this.review}/>;
    case 'review':
      return <Review />;
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('Zebro', () => Zebro);
