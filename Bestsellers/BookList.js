import React, { Component } from "react";

import { StyleSheet, Text, View, Image, ListView } from "react-native";

import BookItem from "./BookItem";
import NYT from './NYT';

class BookList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    this._refreshData();
  }

  _renderRow(rowData) {
    return (
      <BookItem
        coverURL={rowData.book_image}
        title={rowData.title}
        author={rowData.author}/>
    );
  }

  _refreshData() {
    NYT.fetchBooks().then(books => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(books)
      });
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
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
  list: {
    flex: 1,
    flexDirection: "row"
  },
  listContent: {
    flex: 1,
    flexDirection: "column"
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: "#DDDDDD"
  }
});

export default BookList;
