import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import styles from '../styles/typography';

class Forecast extends Component {
  render() {
    return (
      <View style={forecastStyles.forecast}>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp}°F
        </Text>
      </View>
    );
  }
}

const forecastStyles = StyleSheet.create({
  forecast: {
    alignItems: 'center'
  }
});

export default Forecast;
