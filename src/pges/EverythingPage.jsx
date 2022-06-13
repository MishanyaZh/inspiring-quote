import { gql, useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";

import NormalizedAnything, {
  normalizeAnything,
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
  const normalizedEverything = everything.map(normalizeAnything);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="80%"
      p={5}
      bgcolor="pink"
    >
      <Typography textAlign="center" color="red">
        Warning! Admin area!
      </Typography>
      {normalizedEverything.map((anything) => (
        <NormalizedAnything
          // key={normalizeAnything.id}
          normalizedAnything={anything}
        />
      ))}
    </Box>
  );
};

export default EverythingPage;
