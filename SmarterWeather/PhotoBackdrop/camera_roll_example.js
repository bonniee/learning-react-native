import React, {
  Component,
} from 'react';

import {
  Image,
  CameraRoll
} from 'react-native';

import styles from './style';

class PhotoBackdrop extends Component {
  constructor(props){
    super(props);
    this.state = {
      photoSource: {}
    }
  }
  
  componentDidMount() {
    CameraRoll.getPhotos(
      {first: 5},
      (data) => {
        this.setState({
          photoSource: {uri: data.edges[3].node.image.uri}
        })},
      (error) => {
        console.warn(error);
      });
  }

  render() {
    return (
      <Image
        style={styles.backdrop}
        source={this.state.photoSource}
        resizeMode='cover'>
        {this.props.children}
      </Image>
      );
  }
}

export default PhotoBackdrop;
