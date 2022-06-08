import React from "react";
import { useQuery } from "@apollo/client";
import User from "../conponents/User/User";

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
        users.map((user) => <User key={user.name} user={user} />)
      )}
    </>
  );
}

export default UsersPage;
