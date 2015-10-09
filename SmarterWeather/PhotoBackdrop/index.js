var React = require('react-native');
var {
  Image,
  ImagePickerIOS
} = React;
var styles = require('./style.js');

var PhotoBackdrop = React.createClass({
  getInitialState() {
    return {
      photoSource: require('image!flowers')
    }
  },
  componentDidMount() {
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
      </Image>
      );
  }
});

module.exports = PhotoBackdrop;