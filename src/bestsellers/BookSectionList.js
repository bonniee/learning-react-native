import React, { Component } from "react";

import { StyleSheet, Text, View, Image, SectionList } from "react-native";

import BookItem from "./BookItem";
import NYT from "./NYT";

const mockBooks = [
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

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {
    this._refreshData();
  }

  _addKeysToBooks = (books) => {
    // Takes the API response from the NYTimes,
    // and adds a key property to the object
    // for rendering purposes
    return books.map( (book) => {
      return Object.assign(book, {key: book.title });
    });
  }

  _refreshData = () => {
    Promise.all([
      NYT.fetchBooks("hardcover-fiction"),
      NYT.fetchBooks("hardcover-nonfiction")
    ]).then(results => {
      if (results.length !== 2) {
        console.error("Unexpected results");
      }

      console.info(results)

      this.setState({
        data: [
          {
            title: "Hardcover Fiction",
            data: this._addKeysToBooks(results[0]) 
          },
          {
            title: "Hardcover NonFiction",
            data: this._addKeysToBooks(results[1]) 
          }
        ]
      });
    });
  }  

  _renderItem = ({item}) => {
    return (
      <BookItem
        coverURL={item.book_image}
        title={item.key}
        author={item.author}
      />
    );
  }

  _renderHeader = ({section}) => {
    return (
        <Text style={styles.headingText}>
          {section.title}
        </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },

  headingText: {
    fontSize: 24,
    alignSelf: "center",
    backgroundColor: "#FFF",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2
  }
});

export default BookList;
