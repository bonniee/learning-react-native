import React, {
  Component,
} from 'react';

import {
  Image,
  Platform
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import styles from './style.js';
import Button from './../Button';

class PhotoBackdrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSource: require('./flowers.png')
    };
  }

  _pickImage() {
    // See https://github.com/marcshilling/react-native-image-picker#usage

    var options = {
      title: 'Select Image',
      cancelButtonTitle: 'Cancel',
      chooseFromLibraryButtonTitle: 'Choose From Library...',
      takePhotoButtonTitle: 'Take Photo...',
      cameraType: 'back', // 'front' or 'back'
      mediaType: 'photo' // 'photo' or 'video'
    };

    ImagePicker.showImagePicker(
      options,
      (response) => {
        console.log('response = ', response);

        if (response.didCancel) {
          console.log('Canceled ImagePicker');
        }
        else if (response.error) {
          console.log('ImagePicker error: ', response.error);
        }
        else {
          var source;
          if (Platform.OS === 'ios') {
            source = {uri: response.uri.replace('file://', ''), isStatic: true};
          }
          else {
            source = {uri: response.uri, isStatic: true};
          }
          this.setState({ photoSource: source });
        }
      }
    );
  }

  render() {
    return (
      <Image
        style={styles.backdrop}
        source={ this.state.photoSource }
        resizeMode='cover'>
        {this.props.children}
        <Button
          style={styles.button}
          label="Load Image"
          onPress={this._pickImage.bind(this)}/>
      </Image>
      );
  }
}

export default PhotoBackdrop;