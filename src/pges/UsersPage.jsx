import { useQuery } from "@apollo/client";
import User from "../conponents/User/User";
import Link from "../conponents/Link";

import { ALL_USERS_QUERY } from "../common/querys";

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
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
            <User user={user} />
          </Link>
        ))
      )}
    </>
  );
}

export default UsersPage;
