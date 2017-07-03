import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Decks from './Decks'
import Heading from './Header';

class Flashcards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading/>
        <Decks/>
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