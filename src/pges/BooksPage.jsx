import { gql, useQuery } from "@apollo/client";
import Book, { BOOK_FIELDS_FRAGMENT } from "../conponents/Book/Book";
import Link from "../conponents/Link";

export const GET_ALL_BOOKS_QUERY = gql`
  query GetBooks {
    books {
      __typename
      ...bookFields
    }
  }
  ${BOOK_FIELDS_FRAGMENT}
`;

const BooksPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load books</p>;
  }
  const { books } = data;

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`}>
            <Book {...book} />
          </Link>
        ))
      )}
      ;
    </>
  );
};

export default BooksPage;
