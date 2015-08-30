var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var colors = require('../../styles/colors');

var Deck = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <View style={styles.deckGroup}>
        <View style={styles.deckButton}>
          <Text style={styles.deckName}>
            {this.props.name}
          </Text>
        </View>
        <View style={styles.editButton}>
          <Text style={styles.edit}>Edit</Text>
        </View>
      </View>
      );
  }
});

var styles = StyleSheet.create({
  deckGroup: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    alignItems: 'stretch',
    padding: 10
  },
  deckButton: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#66FF66',
    padding: 5
  },
  deckname: {

  },
  editButton: {
    width: 60,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  edit: {

  }
});

module.exports = Deck;