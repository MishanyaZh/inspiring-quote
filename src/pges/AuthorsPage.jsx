import { useQuery } from "@apollo/client";
import Author from "../conponents/Author/Author";
import Link from "../conponents/Link";

import { ALL_AUTHORS_QUERY } from "../common/querys";

const AuthorsPage = () => {
  const { loading, error, data } = useQuery(ALL_AUTHORS_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load authors...</p>;
  }
  const { authors } = data;
  console.log(authors);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        authors.map((author) => (
          <Link key={author.id} to={`/authors/${author.id}`}>
            <Author {...author} />
          </Link>
        ))
      )}
    </>
  );
};
export default AuthorsPage;
