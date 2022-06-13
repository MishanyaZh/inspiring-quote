import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import BookDetails, {
  BOOK_DETAILS_FIELDS_FRAGMENT,
} from "../conponents/Book/BookDetails";

const GET_BOOK_QUERY = gql`
  query GetBook($bookId: ID!) {
    book(id: $bookId) {
      ...bookDetailsFields
    }
  }
  ${BOOK_DETAILS_FIELDS_FRAGMENT}
`;

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK_QUERY, {
    variables: { bookId },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load book "{bookId}"</p>;
  }
  const { book } = data;
  return (
    <>
      <BookDetails book={book} />
    </>
  );
};

export default BookDetailsPage;
