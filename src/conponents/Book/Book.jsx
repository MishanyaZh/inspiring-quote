import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { gql } from "@apollo/client";

export const BOOK_FIELDS_FRAGMENT = gql`
  fragment bookFields on Book {
    id
    title
    cover {
      url
    }
    author {
      name
    }
  }
`;

const Book = ({ id, title, cover, author }) => {
  return (
    <Box
      m={2}
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      border="1px solid grey"
      borderRadius={"5px"}
      bgcolor={"#ae8452"}
      width={"200px"}
      height={"350px"}
    >
      <Typography variant="h5" component="h5" m={1}>
        {title}
      </Typography>
      <img
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
        src={cover.url}
        alt={title}
      />
      <Typography variant="h6" component="h6" m={1}>
        {author.name}
      </Typography>
    </Box>
  );
};

export default Book;
