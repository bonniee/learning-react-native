var React = require('react-native');
var {
  Image,
  ImagePickerIOS
} = React;
var styles = require('./style.js');

var Button = require('./../Button');

var PhotoBackdrop = React.createClass({
  getInitialState() {
    return {
      photoSource: require('image!flowers')
    }
  },
  _pickImage() {
    ImagePickerIOS.openSelectDialog(
      {},
      (data) => {
        this.setState({
          photoSource: {uri: data}
        });
      },
      () => {
        console.log('User canceled the action');
      });
  },
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
          onPress={this._pickImage}/>
      </Image>
      );
  }
});

module.exports = PhotoBackdrop;