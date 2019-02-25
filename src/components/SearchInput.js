import React from "react";

const SearchInput = props => {
  const keywordRef = React.createRef();

  const getBooks = e => {
    e.preventDefault();

    const keyword = keywordRef.current.value.split(" ").join("+");
    const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=AIzaSyDvXGmZlQqtbBoT3PxybPez7jIh76rtFy8`;
    const book = {
      cover: "",
      title: "",
      author: "",
      publisher: "",
    };

    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        res.items.map(val => {
          book.cover = val.volumeInfo.imageLinks.thumbnail;
          book.title = val.volumeInfo.title;
          book.author = val.volumeInfo.authors;
          book.publisher = val.volumeInfo.publisher;
          return props.addBook(book);
        });
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
