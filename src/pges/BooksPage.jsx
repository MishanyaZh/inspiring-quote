import { useQuery } from "@apollo/client";
import Book from "../conponents/Book/Book";
import Link from "../conponents/Link";

import { GET_ALL_BOOKS_QUERY } from "../common/querys";

const BooksPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load books</p>;
  }
  const { books } = data;
  console.log(books);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => (
          <Link key={book.title} to={`/books/${book.id}`}>
            <Book {...book} />
          </Link>
        ))
      )}
      ;
    </>
  );
};

export default BooksPage;
