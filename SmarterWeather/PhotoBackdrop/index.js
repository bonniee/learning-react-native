'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  CameraRoll
} = React;
var styles = require('./style.js');

var PhotoBackdrop = React.createClass({
  getInitialState() {
    return {
      photoSource: require('image!flowers')
    }
  },
  componentDidMount() {
    CameraRoll.getPhotos(
      {first: 8},
      (data) => {
        this.setState({
          photoSource: {uri: data.edges[7].node.image.uri}
        })},
      (error) => {
        console.warn(error);
      });
  },
  render() {
    return (
      <Image
        style={styles.backdrop}
        source={ this.state.photoSource }
        resizeMode='cover'>
        {this.props.children}
      </Image>
      );
  }
});

module.exports = PhotoBackdrop;