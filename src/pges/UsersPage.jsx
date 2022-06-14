import User from "../conponents/User/User";
import Link from "../conponents/Link";
import Box from "@mui/material/Box";

import { gql, useQuery } from "@apollo/client";
import { USER_FIELDS_FRAGMENT } from "../conponents/User/User";

import SearchBox from "./SearchBox";
import { useSearchQuery } from "../conponents/SearchBox";

const ALL_USERS_QUERY = gql`
  query AllUsers($searchQuery: String!) {
    users(searchQuery: $searchQuery) {
      ...userFieldsFragment
    }
  }
  ${USER_FIELDS_FRAGMENT}
`;

function UsersPage() {
  const [searchQuery, handleSearchQueryChange] =
    useSearchQuery("/users/search/");

  const { loading, error, data } = useQuery(ALL_USERS_QUERY, {
    variables: { searchQuery },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load users...</p>;
  }
  const { users } = data;

  const hasUsers = users.length > 0;

  return (
    <>
      <div>
        <SearchBox
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
        />
      </div>
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
        ) : hasUsers ? (
          users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
              <User user={user} />
            </Link>
          ))
        ) : (
          <p>Users no found</p>
        )}
      </Box>
    </>
  );
}

export default UsersPage;
