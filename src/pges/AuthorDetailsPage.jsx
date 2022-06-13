import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import AuthorDetails, {
  AUTHOR_DETAILS_FIELDS_FRAGMENT,
} from "../conponents/Author/AuthorDetails";

const GET_AUTHOR_QUERY = gql`
  query GetAuthor($authorId: ID!) {
    author(id: $authorId) {
      ...authorDetailsFields
    }
  }
  ${AUTHOR_DETAILS_FIELDS_FRAGMENT}
`;

const AuthorDetailsPage = () => {
  const { authorId } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR_QUERY, {
    variables: { authorId },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load author "{authorId}"</p>;
  }
  const { author } = data;
  return (
    <Box>
      <AuthorDetails author={author} />
    </Box>
  );
};

export default AuthorDetailsPage;
