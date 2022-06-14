import { gql, useQuery } from "@apollo/client";
import Book, { BOOK_FIELDS_FRAGMENT } from "../conponents/Book/Book";
import Link from "../conponents/Link";
import SearchBox, { useSearchQuery } from "../conponents/SearchBox";
import Box from "@mui/material/Box";

export const GET_ALL_BOOKS_QUERY = gql`
  query GetBooks($searchQuery: String!) {
    books(searchQuery: $searchQuery) {
      ...bookFields
    }
  }
  ${BOOK_FIELDS_FRAGMENT}
`;

const BooksPage = () => {
  const [searchQuery, handleSearchQueryChange] =
    useSearchQuery("/books/search/");

  const { loading, error, data } = useQuery(GET_ALL_BOOKS_QUERY, {
    variables: { searchQuery },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load books</p>;
  }
  const { books } = data;
  const hasBooks = books.length > 0;

  return (
    <>
      <div>
        <SearchBox
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
        />
      </div>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : hasBooks ? (
          books.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`}>
              <Book {...book} />
            </Link>
          ))
        ) : (
          <p>Books no found</p>
        )}
      </Box>
    </>
  );
};

export default BooksPage;
