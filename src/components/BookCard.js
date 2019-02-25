import React from "react";

const BookCard = props => {
  return (
    <li>
      <h1>{props.book.title}</h1>
      <h3>{props.book.author}</h3>
    </li>
  );
};

export default BookCard;
