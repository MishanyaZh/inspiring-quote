import User from "../conponents/User/User";
import Link from "../conponents/Link";
import Box from "@mui/material/Box";

import { gql, useQuery } from "@apollo/client";
import { USER_FIELDS_FRAGMENT } from "../conponents/User/User";

const ALL_USERS_QUERY = gql`
  query AllUsers {
    users {
      ...userFieldsFragment
    }
  }
  ${USER_FIELDS_FRAGMENT}
`;

function UsersPage() {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load users...</p>;
  }
  const { users } = data;

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
            <User user={user} />
          </Link>
        ))
      )}
    </Box>
  );
}

export default UsersPage;
