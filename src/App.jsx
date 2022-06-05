function App() {
  return (
    <div className="App">
      <Quote text="bla bla" author="Blablator" />
    </div>
  );
}

export default App;

function Quote({ text, author }) {
  return (
    <div>
      <div>{text}</div>
      <div>{author}</div>
    </div>
  );
}
