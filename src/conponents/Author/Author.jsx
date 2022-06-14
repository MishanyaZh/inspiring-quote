import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { gql } from "@apollo/client";

export const AUTHORS_FIELDS_FRAGMENT = gql`
  fragment authorsFields on Author {
    id
    name
    photo {
      url
    }
  }
`;

const Author = ({ id, name, photo }) => {
  return (
    <Box
      m={2}
      border={"1px solid grey"}
      borderRadius={"5px"}
      bgcolor={"darkgrey"}
      width={"200px"}
    >
      <img
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
        src={photo.url}
        alt={name}
      />
      <Typography variant="h6" component="h6" mb={1}>
        {name}
      </Typography>
    </Box>
  );
};

export default Author;
