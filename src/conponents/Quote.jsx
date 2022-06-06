export default function Quote({ text, author, MovieQuote }) {
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
