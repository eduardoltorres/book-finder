import React, { Component } from "react";
import BookCard from "./BookCard";
import SearchInput from "./SearchInput";

class App extends Component {
  state = {
    books: {},
  };

  addBook = book => {
    const books = { ...this.state.books };
    books[`book${Date.now()}`] = book;
    this.setState({ books });
  };
  render() {
    return (
      <>
        <h1>Book Finder</h1>
        <SearchInput addBook={this.addBook} />
        <BookCard results={this.state.title} />
      </>
    );
  }
}

export default App;
