import { gql, useQuery } from "@apollo/client";

function App() {
  return (
    <div className="App">
      <RandomQuote />
    </div>
  );
}

export default App;

const RANDOM_QUOTE_QUERY = gql`
  query getRandomQuote {
    randomMovieQuote
    randomQuoteTheDay {
      text
      author
    }
  }
`;

function RandomQuote(params) {
  const { data, loading, error, refetch } = useQuery(RANDOM_QUOTE_QUERY, {
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

function Quote({ text, author, MovieQuote }) {
  return (
    <>
      <div>
        <h2>Quote The Day</h2>
        <p>'{text}'</p>
        <p>-{author}</p>
      </div>
      <h2>Random Movie Quote</h2>
      <div>'{MovieQuote}'</div>
    </>
  );
}
