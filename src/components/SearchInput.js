import React from "react";
import PropTypes from "prop-types";

const SearchInput = props => {
  const keywordRef = React.createRef();

  const getBooks = e => {
    e.preventDefault();

    const keyword = keywordRef.current.value.split(" ").join("+");
    const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=36&key=AIzaSyDmCzsq_RskQYF6JQbIF6DnXISur3zrGLY`;
    const books = {};

    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        if (res.items) {
          res.items.forEach(val => {
            const {
              imageLinks,
              title,
              authors,
              publisher,
              canonicalVolumeLink,
            } = val.volumeInfo;

            books[val.id] = {
              cover: imageLinks
                ? imageLinks.thumbnail
                : "https://via.placeholder.com/130x200",
              title: title.length > 40 ? title.slice(0, 35) + "..." : title,
              authors:
                authors && authors.length > 2 ? authors.slice(0, 2) : authors,
              publisher,
              link: canonicalVolumeLink,
            };
            props.addBook(books);
          });
        } else {
          alert("Invalid keyword(s). Please try again.");
        }
      })
      .catch(err => {
        alert("Oops! There was an error. Please try again.");
      });
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={getBooks}>
      <input name="keyword" ref={keywordRef} type="text" />
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
};

SearchInput.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default SearchInput;
