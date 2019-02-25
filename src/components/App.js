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
    // console.log(books);
    this.setState({ books });
  };

  render() {
    return (
      <div>
        <h1>Book Finder</h1>
        <SearchInput addBook={this.addBook} />
        <ul>
          {Object.keys(this.state.books).map(key => (
            <BookCard key={key} book={this.state.books[key]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
