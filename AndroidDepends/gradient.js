import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  NativeModules
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class Gradient extends Component {
  render() {
    NativeModules.HelloWorld.greeting("Bonnie");
    
    return (
        <LinearGradient colors={['#FFFFFF', '#00A8A8']} style={styles.container}>
          <Text style={styles.welcome}>
            A Lovely Gradient
          </Text>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 50,
    padding: 20
  }
});

export default Gradient;
