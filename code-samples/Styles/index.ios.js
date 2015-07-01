'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Mondrian = require('./mondrian');


var Styles = React.createClass({
  render: function() {
    return (
      <View style={styles.parent}>
        <Text style={[styles.child, styles.childOne]}> Child One </Text>
        <Text style={[styles.child, styles.childTwo]}> Child Two </Text>
        <Text style={[styles.child, styles.childThree]}> Child Three </Text>  
      </View>
    );
  }
});

var styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  child: {
    flex: 1,
    borderColor: '#AA0099',
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  }
});

AppRegistry.registerComponent('Styles', () => Mondrian);
