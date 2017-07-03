import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import DeckScreen from './DeckScreen';
import NewCardScreen from './NewCardScreen';
import Heading from './Header';
import ReviewScreen from './ReviewScreen';

/*
TODO:
  - Figure out how to present different navigation options
      - Navigator is deprecated !!! and no longer is included in the react native pacakge. welp.
      - Expo comes with react-navigation (aka Stack Navigator) built in
      - Idea: start with a simple StackNavigator and functioning rendering components,
              but no logic / leave them unconnected. No Redux yet either.
              Checkpoint #1: Dummy rendering code, basic StackNavigator, no wiring
              Checkpoint #2: Wire up clicky callbacks so that you can tap through screens
              Checkpoint #3: Persisting data, using Redux
*/

class Flashcards extends Component {

  _renderScene(route) {
    // TODO: implement routing.
    return <ReviewScreen />;
    // return <NewCardScreen />;
    // return <DeckScreen />;
  }
  render() {
    return (
      <View style={styles.container}>
        <Heading/>
        { this._renderScene("decks")}
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
});

export default Flashcards;