'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

var BookItem = require('./BookItem');

var BookList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: ds.cloneWithRows([])
    };
  },

  componentDidMount: function() {
    this._refreshData();
  },

  _renderRow: function(rowData) {
    return (<BookItem
              coverURL={rowData.book_image}
              title={rowData.title}
              author={rowData.author}/>);
  },

  _refreshData: function() {
    var books = [
      {
        rank: 1,
        title: 'GATHERING PREY',
        author: 'John Sandford',
        book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg'
      },
      {
        rank: 2,
        title: 'MEMORY MAN',
        author: 'David Baldacci',
        book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg'
      }
    ];

    this.setState({
      books: books,
      dataSource: this.state.dataSource.cloneWithRows(books)
    });

  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          contentContainerStyle={styles.listContent}
          style={styles.list}
          />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 24
  },
  list: {
    flex: 1,
    flexDirection: 'row'
  },
  listContent: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  }
});

module.exports = BookList;
