/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

var Actions = require('./src/actions');

var Decks = require('./src/components/Decks');

var CardsStore = require('./src/stores/CardsStore');
var DeckStore = require('./src/stores/DeckStore');
var DeckMetaStore = require('./src/stores/DeckMetaStore');

var Zebro = React.createClass({
  componentWillMount() {
    // TODO: fetch deck data from local storage or something
  },
  _renderScene(route, navigator) {
    return <Decks/>;
  },

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'Decks'}}
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
