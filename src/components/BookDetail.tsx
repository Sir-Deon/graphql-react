import { GET_BOOK } from "../queries/queries";
import { useQuery } from "@apollo/client";

interface PropsType {
  bookId: any;
}

function BookDetail({ bookId }: PropsType) {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });

  if (error) {
  }

  const displayBookDetail = () => {
    if (data?.book) {
      return (
        <div>
          <h2>{data.book.name}</h2>
          <p>Genre : {data.book.genre}</p>
          <p>Author : {data.book.author.name}</p>
          <p>All books by this author :</p>
          <ul className="other-books">
            {data.book.author.books.map((item: any, index: number) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected ...</div>;
    }
  };
  return (
    <div id="book-details">
      <p>Output book details here</p>
      {loading && <p>Loading...</p>}
      {displayBookDetail()}
    </div>
  );
}

export default BookDetail;
