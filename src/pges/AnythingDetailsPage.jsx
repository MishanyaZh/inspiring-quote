import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import AnythingDetails from "../conponents/AnythingDetails";
import { Box, Typography } from "@mui/material";

const GET_ANYTHING_QUERY = gql`
  query GetAnything($anyId: ID!) {
    anything(id: $anyId) {
      __typename
    }
  }
`;

const AnythingDetailsPage = () => {
  const { anyId } = useParams();
  const { loading, error, data } = useQuery(GET_ANYTHING_QUERY, {
    variables: { anyId },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load record</p>;
  }

  const { anything } = data;
  console.log(anything);

  return (
    <Box w="100%" bg="red.100">
      <Typography textAlign="center" color="red.500">
        Warning! Admin area!
      </Typography>
      <AnythingDetails anything={anything} />
    </Box>
  );
};

export default AnythingDetailsPage;
