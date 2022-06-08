import React from "react";
import { gql, useQuery } from "@apollo/client";
import Book from "../conponents/Book/Book";

const GET_ALL_BOOKS_QUERY = gql`
  query GetAllBooks {
    books {
      title
      cover {
        url
      }
      author {
        name
      }
    }
  }
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
        books.map((book) => <Book key={book.title} {...book} />)
      )}
    </>
  );
};

export default BooksPage;
