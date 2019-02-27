import React, { Component } from "react";
import BookCard from "./BookCard";
import SearchInput from "./SearchInput";

class App extends Component {
  state = {
    books: {},
  };

  addBook = results => {
    this.setState({ books: results });
  };

  render() {
    return (
      <div className="wrapper">
        <header>
          <div className="title-search">
            <h1>Find A Book!</h1>
            <SearchInput addBook={this.addBook} />
          </div>
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
