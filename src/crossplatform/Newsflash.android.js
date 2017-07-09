import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

export default class App extends React.Component {
  componentDidMount() {
    Alert.alert("Hey!", "You're on Android.");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          What? I didn't say anything.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
