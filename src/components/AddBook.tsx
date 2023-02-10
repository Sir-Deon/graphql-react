/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from "../queries/queries";

function AddBook() {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthor] = useState("");
  const [addBook, options] = useMutation(ADD_BOOK);

  const submit = (e: any) => {
    e.preventDefault();
    addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: GET_BOOKS }],
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <form id="add-book" onSubmit={submit}>
        <div className="field">
          <label>Book Name:</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            value={genre}
            onChange={e => setGenre(e.target.value)}
            type="text"
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={e => setAuthor(e.target.value)} value={authorId}>
            <option value="">Select author</option>
            {data.authors.map((author: any, index: number) => (
              <option value={author.id} key={index}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <button>+</button>
        {options.loading && <p>Loading ....</p>}
      </form>
    </div>
  );
}

export default AddBook;
