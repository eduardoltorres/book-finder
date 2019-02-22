import React, { Component } from "react";
import BookCard from "./BookCard";
import SearchInput from "./SearchInput";

class App extends Component {
  state = {
    url:
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDvXGmZlQqtbBoT3PxybPez7jIh76rtFy8",
    results: [],
  };

  toFetch = () => {
    const endpoint =
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDvXGmZlQqtbBoT3PxybPez7jIh76rtFy8";
    const books = [];

    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        books.push(res.items[0].volumeInfo.title);
        console.log(books);
        this.setState({ results: books });
      });
  };
  render() {
    return (
      <>
        <h1>Book Finder</h1>
        <SearchInput />
        <BookCard toFetch={this.toFetch} results={this.state.results} />
      </>
    );
  }
}

export default App;
