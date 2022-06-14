import { gql, useQuery } from "@apollo/client";
import Author, { AUTHORS_FIELDS_FRAGMENT } from "../conponents/Author/Author";
import Link from "../conponents/Link";
import Box from "@mui/material/Box";
import SearchBox from "./SearchBox";
import { useSearchQuery } from "../conponents/SearchBox";

const GET_AUTHORS_QUERY = gql`
  query GetAuthors($searchQuery: String!) {
    authors(searchQuery: $searchQuery) {
      ...authorsFields
    }
  }
  ${AUTHORS_FIELDS_FRAGMENT}
`;

const AuthorsPage = () => {
  const [searchQuery, handleSearchQueryChange] =
    useSearchQuery("/authors/search/");

  const { loading, error, data } = useQuery(GET_AUTHORS_QUERY, {
    variables: { searchQuery },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load authors...</p>;
  }
  const { authors } = data;

  const hasAuthors = authors.length > 0;

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
        ) : hasAuthors ? (
          authors.map((author) => (
            <Link key={author.id} to={`/authors/${author.id}`}>
              <Author {...author} />
            </Link>
          ))
        ) : (
          <p>Authors no found</p>
        )}
      </Box>
    </>
  );
};
export default AuthorsPage;
