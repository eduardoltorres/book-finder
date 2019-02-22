import React, { Component } from "react";

class BookCard extends Component {
  render() {
    return (
      <>
        <p>Title: {this.props.results}</p>
        <button onClick={this.props.toFetch}>Find book</button>
      </>
    );
  }
}

export default BookCard;
