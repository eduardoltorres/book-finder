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
      <p className="authors">
        {(props.book.authors && props.book.authors.join(", ")) ||
          "No authors available."}
      </p>
      <p className="publisher">
        {props.book.publisher || "No publisher available."}
      </p>
      <a
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        href={props.book.link}
      >
        More...
      </a>
    </li>
  );
};

export default BookCard;
