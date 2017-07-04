import { StyleSheet } from 'react-native';

const fonts = StyleSheet.create({
  normal: {
    fontSize: 24
  },

  alternate: {
    fontSize: 50,
    color: '#FFFFFF'
  },

  big: {
    fontSize: 32,
    alignSelf: 'center'
  }
});

const scalingFactors = {
  normal: 15,
  big: 7
};

module.exports = {fonts, scalingFactors};
