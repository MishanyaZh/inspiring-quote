import { gql, useQuery } from "@apollo/client";
import Author from "../conponents/Author/Author";

const ALL_AUTHORS_QUERY = gql`
  query AllAuthors {
    authors {
      name
      photo {
        url
      }
    }
  }
`;

const AuthorsPage = () => {
  const { loading, error, data } = useQuery(ALL_AUTHORS_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load authors...</p>;
  }
  const { authors } = data;
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        authors.map((author) => <Author key={author.name} author={author} />)
      )}
    </>
  );
};
export default AuthorsPage;
