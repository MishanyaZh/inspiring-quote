import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  let { bookId } = useParams();
  console.log(bookId);
  return (
    <Box>
      <p>Book {bookId} details page</p>
    </Box>
  );
};

export default BookDetailsPage;
