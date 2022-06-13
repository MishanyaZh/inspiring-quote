import { useParams } from "react-router";

import { gql, useQuery } from "@apollo/client";
import AnythingDetails, {
  ANYTHING_DETAILS_FIELDS_FRAGMENT,
} from "../conponents/AnythingDetails";

import { Box, Typography } from "@mui/material";

const GET_ANYTHING_QUERY = gql`
  query GetAnything($anyId: ID!) {
    anything(id: $anyId) {
      ...anythingDetailsFields
    }
  }
  ${ANYTHING_DETAILS_FIELDS_FRAGMENT}
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

  return (
    <Box w="100%" bgcolor="pink">
      <Typography textAlign="center" variant="h3" color="red">
        Warning! Admin area!
      </Typography>
      <AnythingDetails anything={anything} />
    </Box>
  );
};

export default AnythingDetailsPage;
