import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {fonts, scalingFactors} from './../styles/fonts';
import Dimensions from 'Dimensions';
let {width} = Dimensions.get('window');

class NormalText extends Component {
  static displayName = 'NormalText';

  render() {
    return (
      <Text style={[styles.alignment, this.props.style, fonts.normal, styles.normal]}>
        {this.props.children}
      </Text>
      );
  }
}

NormalText.propTypes = {
  style: Text.propTypes.style
};

const styles = StyleSheet.create({
  alignment: {
    textAlign: 'center'
  },
  normal: {
    fontSize: width / scalingFactors.normal
  }
});

export default NormalText;
