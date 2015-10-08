var React = require('react-native');
var { Image, View } = React;
var styles = require('./style.js');

var PhotoBackdrop = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backdrop}
          source={require('image!flowers')}
          resizeMode='cover'>
          {this.props.children}
        </Image>
      </View>
      );
  }
});

module.exports = PhotoBackdrop;