import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput } from "react-native";

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "" };
  }

  _handleTextChange(event) {
    this.setState({ zip: event.nativeEvent.text });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}.
        </Text>
        <Forecast 
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}/>
        <TextInput
          style={styles.input}
          returnKeyType="go"
          onSubmitEditing={event => this._handleTextChange(event)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: { fontSize: 20, textAlign: "center", margin: 10 },
  input: { fontSize: 20, borderWidth: 2, height: 40 }
});

export default WeatherProject;
