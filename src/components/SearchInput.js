import React from "react";

const SearchInput = props => {
  const keywordRef = React.createRef();

  const getBooks = e => {
    e.preventDefault();

    const keyword = keywordRef.current.value.split(" ").join("+");
    const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=36&key=AIzaSyDvXGmZlQqtbBoT3PxybPez7jIh76rtFy8`;
    const books = {};

    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        if (res.items) {
          res.items.forEach(val => {
            books[val.id] = {
              cover: val.volumeInfo.imageLinks
                ? val.volumeInfo.imageLinks.thumbnail
                : "https://via.placeholder.com/130x200",
              title:
                val.volumeInfo.title.length > 40
                  ? val.volumeInfo.title.slice(0, 35) + "..."
                  : val.volumeInfo.title,
              authors:
                val.volumeInfo.authors && val.volumeInfo.authors.length > 2
                  ? val.volumeInfo.authors.slice(0, 2)
                  : val.volumeInfo.authors,
              publisher: val.volumeInfo.publisher,
              link: val.volumeInfo.canonicalVolumeLink,
            };
            console.log(val.volumeInfo.authors);
            props.addBook(books);
          });
        } else {
          alert("Invalid keyword(s). Please try again.");
        }
      })
      .catch(err => {
        console.log(err);
        alert("Oops! There was an error. Please try again.");
      });
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={getBooks}>
      <input
        name="keyword"
        ref={keywordRef}
        type="text"
        placeholder="Type book keyword(s)..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
