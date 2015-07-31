'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  CameraRoll
} = React;

var flowerURI = require('image!flowers');

var s = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  paddingTop: 30,
  flexDirection: 'column'
};

var Photos = React.createClass({
  getInitialState() {
    return {
      photoSource: flowerURI
    }
  },
  componentDidMount() {
    CameraRoll.getPhotos({first: 6}, (data) => {
      this.setState({
        photoSource: {uri: data.edges[5].node.image.uri}
      })
    }, (error) => {debugger; });
  },
  render() {
    return (
      <Image
        style={ s}
        source={ this.state.photoSource }
        resizeMode='cover'>
        {this.props.children}
      </Image>
      );
  }
});

module.exports = Photos;