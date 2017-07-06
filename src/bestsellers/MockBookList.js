import React, { Component } from "react";

import { StyleSheet, Text, View, Image, ListView } from "react-native";

import BookItem from "./BookItem";

class BookList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { dataSource: ds.cloneWithRows([]) };
  }

  componentDidMount() {
    this._refreshData();
  }

  _renderRow(rowData) {
    return (
      <BookItem
        coverURL={rowData.book_image}
        title={rowData.title}
        author={rowData.author} />
    );
  }

  _refreshData() {
    const books = [
      {
        rank: 1,
        title: "GATHERING PREY",
        author: "John Sandford",
        book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg"
      },
      {
        rank: 2,
        title: "MEMORY MAN",
        author: "David Baldacci",
        book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg"
      }
    ];

    this.setState({
      books: books,
      dataSource: this.state.dataSource.cloneWithRows(books)
    });
  }

  render() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 24
  },
  list: { flex: 1, flexDirection: "row" },
  listContent: { flex: 1, flexDirection: "column" },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: "#DDDDDD"
  }
});

export default BookList;
