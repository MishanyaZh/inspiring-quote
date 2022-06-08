import React from "react";
import { gql, useQuery } from "@apollo/client";
import User from "../conponents/User/User";

const ALL_USERS_QUERY = gql`
  query AllUsers {
    users {
      name
      avatar {
        image {
          url
        }
        color
      }
    }
  }
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
