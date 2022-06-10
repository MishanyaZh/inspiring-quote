import { useParams } from "react-router";
import { useQuery } from "@apollo/client";

import UserDetails from "../conponents/User/UserDetails";
import { USERS_QUERY } from "../common/querys";

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
