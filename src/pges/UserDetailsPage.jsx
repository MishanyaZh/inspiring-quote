import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";

import UserDetails from "../conponents/User/UserDetails";

export const USERS_QUERY = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
      info
      avatar {
        image {
          url
        }
        color
      }
    }
  }
`;

const UserDetailsPage = () => {
  const { userId } = useParams();
  const { loading, error, data } = useQuery(USERS_QUERY, {
    variables: { userId },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load user "{userId}"</p>;
  }
  const { user } = data;
  return (
    <>
      <UserDetails user={user} />
    </>
  );
};

export default UserDetailsPage;
