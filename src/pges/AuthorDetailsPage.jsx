import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import AuthorDetails from "../conponents/Author/AuthorDetails";

import { GET_AUTHOR_QUERY } from "../common/querys";

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
