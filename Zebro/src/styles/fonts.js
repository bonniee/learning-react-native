import { StyleSheet } from 'react-native';

var fonts = StyleSheet.create({
  normal: {
    fontSize: 24,
    fontFamily: 'Avenir Medium',
    fontWeight: 'oops'
  },

  alternate: {
    fontSize: 50,
    fontFamily: 'Avenir Heavy',
    color: '#FFFFFF'
  },

  big: {
    fontSize: 32,
    alignSelf: 'center',
    fontFamily: 'Avenir Medium'
  }
});

module.exports = fonts;
