import Link from "../Link";
import { gql } from "@apollo/client";
import { Box, Typography } from "@mui/material";

export const BOOK_DETAILS_FIELDS_FRAGMENT = gql`
  fragment bookDetailsFields on Book {
    id
    title
    description
    cover {
      url
    }
    author {
      id
      name
    }
  }
`;

const BookDetails = ({ book }) => {
  return (
    <>
      <Typography variant="h4" color="gray" mb={1}>
        {book.title}
      </Typography>

      <Box>
        <img
          style={{ objectFit: "cover" }}
          src={book.cover.url}
          mr="3"
          alt="#"
        />
        <Typography variant="h4">
          Written by
          <Link to={`/authors/${book.author.id}`}>{book.author.name}</Link>
        </Typography>
        <Box>{book.description}</Box>
      </Box>
    </>
  );
};

export default BookDetails;
