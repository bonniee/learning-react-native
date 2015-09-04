var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;

var Button = React.createClass({
  propTypes: {
    onPress: React.PropTypes.func.isRequired,
    styles: View.propTypes.style,
    children: React.PropTypes.object
  },

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={[styles.button, this.props.styles]}>
        {this.props.children}
      </TouchableHighlight>
      );
  }
});

var CreateDeckButton = React.createClass({
  render() {
    return (
      <Button styles={styles.wideButton}
        onPress={this.props.onPress}>
        <Text>Create Deck</Text>
      </Button>
      );
  }
});

var EnterDeck = React.createClass({
  propTypes: {
    create: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      text: ''
    };
  },
  _create() {
    this.props.create(this.state.text);
    this.setState(this.getInitialState());
  },
  _onSubmit(ev) {
    this.props.create(ev.nativeEvent.text);
    this.setState(this.getInitialState());
  },
  _onChange(text) {
    this.setState({text: text});
  },
  render() {
    return (
      <View style={styles.enterDeck}>
        <TextInput style={[styles.nameField, styles.wideButton]}
          ref="newDeckInput"
          multiline={false}
          value={this.state.text}
          autoCorrect={false}
          onChangeText={this._onChange}
          onSubmitEditing={this._onSubmit}/>
        <CreateDeckButton onPress={this._create}/>
      </View>
      );
  }
});

export default React.createClass({
  propTypes: {
    newDeck: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      showingNameField: false
    };
  },
  _newDeck(name) {
    this.props.newDeck(name);
    this.setState(this.getInitialState());
  },
  _showField() {
    this.setState({showingNameField: true});
  },
  render() {
    var contents = this.state.showingNameField
      ? <EnterDeck create={this._newDeck}/>
      : <CreateDeckButton onPress={this._showField}/>
      ;
    return contents;
  }
});

var styles = StyleSheet.create({
  wideButton: {
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    margin: 10
  },
  button: {
    backgroundColor: '#FFFF00'
  },
  nameField: {
    backgroundColor: '#FF7777',
    height: 40
  }
});
