import React from "react";

const BookCard = props => {
  return (
    <li className="book">
      <img
        className="thumbnail"
        alt={props.book.title}
        src={props.book.cover}
      />
      <p className="title">{props.book.title}</p>
      <p className="author">{props.book.author}</p>
    </li>
  );
};

export default BookCard;
