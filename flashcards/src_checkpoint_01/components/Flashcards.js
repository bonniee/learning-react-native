import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Heading from "./Header";
import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";

class Flashcards extends Component {
  _renderScene() {
    // return <ReviewScreen />;
    // return <NewCardScreen />;
    return <DeckScreen />;
  }
  render() {
    return (
      <View style={styles.container}>
        <Heading />
        {this._renderScene()}
      </View>
    );
  }
}

const styles = StyleSheet.create({ container: { flex: 1, marginTop: 30 } });

export default Flashcards;
