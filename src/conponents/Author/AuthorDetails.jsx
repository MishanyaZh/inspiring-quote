import Link from "../Link";
import Book from "../Book/Book";
import { Box, Typography } from "@mui/material";

const AuthorDetails = ({ author }) => {
  return (
    <Box m="3" overflow="hidden" direction="column" align="center">
      <Typography as="h2" size="lg" color="gray.700" my="3">
        {author.name}
      </Typography>
      <Box as="article">
        <img
          width={"40%"}
          objectFit="cover"
          src={author.photo.url}
          float="left"
          mr="3"
          alt="#"
        />
        <Box as="article">{author.bio}</Box>
      </Box>
      <Typography as="h3" size="sm">
        Books
      </Typography>
      {author.books.map((book) => (
        <Link to={`/books/${book.id}`} key={book.id} w="100%">
          <Book {...book} author={author} />
        </Link>
      ))}
    </Box>
  );
};

export default AuthorDetails;
