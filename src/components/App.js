import React, { Component } from "react";
import BookCard from "./BookCard";
import SearchInput from "./SearchInput";

class App extends Component {
  state = {
    books: {},
  };

  addBook = books => {
    this.setState({ books });
  };

  render() {
    return (
      <>
        <header>
          <div className="title-search">
            <h1>
              <a href="/">Find A Book</a>
            </h1>
            <SearchInput addBook={this.addBook} />
          </div>
        </header>
        <ul className="books">
          {Object.keys(this.state.books).map(key => (
            <BookCard key={key} book={this.state.books[key]} />
          ))}
        </ul>
      </>
    );
  }
}

export default App;
