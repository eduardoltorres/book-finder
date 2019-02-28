import React from "react";
import PropTypes from "prop-types";

const BookCard = props => {
  return (
    <li className="book">
      <img
        className="thumbnail"
        alt={props.book.title}
        src={props.book.cover}
      />
      <div className="book__info">
        <p className="title">{props.book.title}</p>
        <p className="authors">
          {(props.book.authors && props.book.authors.join(", ").slice(0, 35)) ||
            "No authors available."}
        </p>
        <p className="publisher">
          {props.book.publisher || "No publisher available."}
        </p>
      </div>
      <a
        className="btn book__btn"
        target="_blank"
        rel="noopener noreferrer"
        href={props.book.link}
      >
        Details
      </a>
    </li>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.array,
    publisher: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default BookCard;
