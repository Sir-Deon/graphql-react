import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_BOOKS } from "../queries/queries";
import BookDetail from "./BookDetail";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [selected, setSelected] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book: any, index: number) => (
          <li key={index} onClick={() => setSelected(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetail bookId={selected} />
    </div>
  );
}

export default BookList;
