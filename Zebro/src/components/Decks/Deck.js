var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var Deck = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    onReview: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <View style={styles.deckGroup}>

        <TouchableHighlight style={styles.deckButton} onPress={this.props.onReview}>
          <Text style={styles.deckName}>
            {this.props.name}
          </Text>
        </TouchableHighlight>

        <View style={styles.editButton}>
          <Text style={styles.edit}>
            Edit
          </Text>
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
