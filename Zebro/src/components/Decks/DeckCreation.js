import React from 'react-native';
var {
  StyleSheet,
  View
} = React;

import Button from './../Button';
import NormalText from './../NormalText';
import Input from './../Input';

import colors from './../../styles/colors';

var CreateDeckButton = React.createClass({
  render() {
    return (
      <Button
        style={styles.createDeck}
        onPress={this.props.onPress}>
        <NormalText>Create Deck</NormalText>
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
  },
  render() {
    return (
      <View style={styles.enterDeck}>
        <Input onEntry={this.props.create}
          onChange={(text) => {this.setState({text});}}/>
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
  nameField: {
    backgroundColor: colors.tan,
    height: 40
  },
  wideButton: {
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    margin: 10
  },
  createDeck: {
    backgroundColor: colors.green
  }
});
