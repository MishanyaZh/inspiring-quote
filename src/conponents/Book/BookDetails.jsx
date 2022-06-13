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
          alt={book.title}
        />
        <Typography variant="h6">Written by:</Typography>
        <Link to={`/authors/${book.author.id}`}>
          <Typography
            borderRadius={"50%"}
            bgcolor={"#def2f8"}
            variant="h4"
            color="gray"
            style={{ textDecoration: "underline" }}
          >
            {book.author.name}
          </Typography>
        </Link>
        <Box m={1}>{book.description}</Box>
      </Box>
    </>
  );
};

export default BookDetails;
