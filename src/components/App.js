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
      <div className="wrapper">
        <header>
          <h1>Book Finder</h1>
          <SearchInput addBook={this.addBook} />
        </header>
        <div className="books-container">
          <ul className="books">
            {Object.keys(this.state.books).map(key => (
              <BookCard key={key} book={this.state.books[key]} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
