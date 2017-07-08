import React, { Component } from "react";
import { Image } from "react-native";

import styles from "./styles";

class Logo extends Component {
  static displayName = "Logo";

  render() {
    return <Image source={require("../../../icon.png")} style={styles.logo} />;
  }
}

export default Logo;
