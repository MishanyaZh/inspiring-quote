import { useQuery, gql } from "@apollo/client";
import Quote from "./Quote";

const RANDOM_QUOTE_QUERY = gql`
  query getRandomQuote {
    randomMovieQuote
    randomQuoteTheDay {
      text
      author
    }
  }
`;

export default function RandomQuote(params) {
  const { data, loading, error, refetch } = useQuery(RANDOM_QUOTE_QUERY, {
    fetchPolicy: "no-cache",
    onError: (error) => {
      console.log("error", error);
    },
    errorPolicy: "all",
  });

  if (loading) {
    return "Quote is loading...";
  }
  if (error) {
    return "Could not load quote!";
  }
  const { text, author } = data.randomQuoteTheDay;
  const MovieQuote = data.randomMovieQuote;

  return (
    <>
      <Quote text={text} author={author} MovieQuote={MovieQuote} />
      <button
        onClick={() => {
          refetch();
        }}
      >
        Get Movie Quote
      </button>
    </>
  );
}
