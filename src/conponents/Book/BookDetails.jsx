import Link from "./Link";
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
    <Box m="3" direction="column" align="center">
      <Typography as="h2" size="lg" color="gray.700" my="3">
        {book.title}
      </Typography>

      <Box as="article">
        <img
          src={book.cover.url}
          objectFit="cover"
          width="40%"
          float="left"
          mr="3"
          alt="#"
        />
        <Typography as="h4" size="sm">
          Written by
          <Link to={`/authors/${book.author.id}`}>{book.author.name}</Link>
        </Typography>
        <Box as="article">{book.description}</Box>
      </Box>
    </Box>
  );
};

export default BookDetails;
