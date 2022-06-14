import { gql, useQuery } from "@apollo/client";
import Author, { AUTHORS_FIELDS_FRAGMENT } from "../conponents/Author/Author";
import Link from "../conponents/Link";
import Box from "@mui/material/Box";

const GET_AUTHORS_QUERY = gql`
  query GetAuthors {
    authors {
      ...authorsFields
    }
  }
  ${AUTHORS_FIELDS_FRAGMENT}
`;

const AuthorsPage = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load authors...</p>;
  }
  const { authors } = data;
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
        authors.map((author) => (
          <Link key={author.id} to={`/authors/${author.id}`}>
            <Author {...author} />
          </Link>
        ))
      )}
    </Box>
  );
};
export default AuthorsPage;
