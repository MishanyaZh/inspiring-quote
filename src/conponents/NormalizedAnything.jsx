import { gql } from "@apollo/client";
import { Box, Typography } from "@mui/material";

export const normalizeAnything = (anything) => ({
  ...anything.nested,
  ...anything,
});

export const NORMALIZED_ANYTHING_FIELDS_FRAGMENT = gql`
  fragment normalizedAnythingFields on Anything {
    ... on Author {
      id
      name
      info: bio
      img: photo {
        url
      }
    }
    ... on Book {
      id
      name: title
      info: description
      img: cover {
        url
      }
    }
    ... on User {
      id
      name
      info
      nested: avatar {
        img: image {
          url
        }
      }
    }
  }
`;

const COLORS_BY_TYPENAME = {
  Book: "tomato",
  Author: "green",
  User: "blue",
};

const NormalizedAnything = ({ normalizedAnything, index }) => {
  return (
    <Box
      key={index}
      display="flex"
      alignItems="center"
      width="80%"
      m={2}
      p={2}
      overflow="hidden"
      bgcolor={COLORS_BY_TYPENAME[normalizedAnything.__typename]}
      borderRadius="5px"
    >
      <Box display={"flex"} flexDirection={"row"}>
        <Box>
          <img
            width="100px"
            objectfit="cover"
            src={normalizedAnything.img && normalizedAnything.img.url}
            alt="#"
          />
        </Box>
        <Box>
          <Typography variant="h6">{normalizedAnything.__typename}</Typography>
          <Typography variant="h4" component="h4">
            {normalizedAnything.name}
          </Typography>
          <Typography
            ml={1}
            variant="h5"
            as="h5"
            maxWidth="600px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {normalizedAnything.info}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NormalizedAnything;
