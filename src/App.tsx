import React from "react";
import AddBook from "./components/AddBook";

// Components
import BookList from "./components/BookList";

function App() {
  return (
    <div id="main">
      <h1>Ninja's Reading List</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
