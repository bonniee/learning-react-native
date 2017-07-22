import React, { Component } from "react";

import { Image, CameraRoll } from "react-native";

import styles from "./style";

var PhotoBackdrop = React.createClass({
  getInitialState() {
    return { photoSource: null };
  },
  componentDidMount() {
    CameraRoll.getPhotos({ first: 5 }).then(data => {
      this.setState({ photoSource: { uri: data.edges[3].node.image.uri } });
    }, error => {
      console.warn(error);
    });
  },
  render() {
    return (
      <Image
        style={styles.backdrop}
        source={this.state.photoSource}
        resizeMode="cover"
      >
        {this.props.children}
      </Image>
    );
  }
});

export default PhotoBackdrop;
