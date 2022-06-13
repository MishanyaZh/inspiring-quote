import Link from "../Link";
import Book, { BOOK_FIELDS_FRAGMENT } from "../Book/Book";
import { Box, Typography } from "@mui/material";
import { gql } from "@apollo/client";

export const AUTHOR_DETAILS_FIELDS_FRAGMENT = gql`
  fragment authorDetailsFields on Author {
    id
    name
    bio
    photo {
      url
    }
    books {
      ...bookFields
    }
  }
  ${BOOK_FIELDS_FRAGMENT}
`;

const AuthorDetails = ({ author }) => {
  console.log(author);
  return (
    <Box overflow="hidden" direction="column" align="center">
      <Typography variant="h4" color="gray" m={1}>
        {author.name}
      </Typography>
      <Box as="article">
        <img
          width={"40%"}
          style={{ objectFit: "cover" }}
          src={author.photo.url}
          alt={author.name}
        />
        <Box m={1}>{author.bio}</Box>
      </Box>
      <Typography variant="h4" color="gray">
        Books
      </Typography>
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
        {author.books.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id} w="100%">
            <Book {...book} />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default AuthorDetails;
