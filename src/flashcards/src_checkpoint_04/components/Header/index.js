import React, { Component } from "react";
import { View } from "react-native";

import styles from "./styles";
import HeadingText from "./../HeadingText";
import Logo from "./Logo";

class Header extends Component {
  static displayName = "Header";

  render() {
    return (
      <View style={styles.header}>
        <Logo />
        <HeadingText>FLASHCARDS</HeadingText>
      </View>
    );
  }
}

export default Header;
