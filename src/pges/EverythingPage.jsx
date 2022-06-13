import { gql, useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";

import NormalizedAnything, {
  NORMALIZED_ANYTHING_FIELDS_FRAGMENT,
} from "../conponents/NormalizedAnything";

const GET_EVERYTHING_QUERY = gql`
  query GetEverything {
    everything {
      ...normalizedAnythingFields
    }
  }
  ${NORMALIZED_ANYTHING_FIELDS_FRAGMENT}
`;

const EverythingPage = () => {
  const { loading, error, data } = useQuery(GET_EVERYTHING_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load everything</p>;
  }

  const { everything } = data;
  return (
    <Box w="100%" bg="red.100" p={5}>
      <Typography textAlign="center" color="red.500">
        Warning! Admin area!
      </Typography>
      {everything.map((anything) => (
        <NormalizedAnything normalizedAnything={anything} />
      ))}
    </Box>
  );
};

export default EverythingPage;
