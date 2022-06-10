import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import BookDetails from "../conponents/Book/BookDetails";

import { GET_BOOK_QUERY } from "../common/querys";

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
