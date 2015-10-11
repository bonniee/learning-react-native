var React = require('react-native');
var { Image } = React;
var styles = require('./style.js');

var PhotoBackdrop = React.createClass({
  render() {
    return (
        <Image
          style={styles.backdrop}
          source={require('image!flowers')}
          resizeMode='cover'>
          {this.props.children}
        </Image>
      );
  }
});

module.exports = PhotoBackdrop;