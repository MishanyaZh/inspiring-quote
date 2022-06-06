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
    randomQuote {
      text
      author
    }
    greetingCat
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
  const { text, author } = data.randomQuote;
  const cat = data.greetingCat;

  return (
    <>
      <Quote text={text} author={author} cat={cat} />
      <button
        onClick={() => {
          refetch();
        }}
      >
        Get quote
      </button>
    </>
  );
}

function Quote({ text, author, cat }) {
  return (
    <div>
      <div>{text}</div>
      <div>{author}</div>
      <div>{cat}</div>
    </div>
  );
}
