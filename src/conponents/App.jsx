import AuthorsPage from "../pges/AuthorsPage";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function App() {
  return (
    <Container>
      <Typography variant="h2" component="h2" m={2} textAlign="center">
        Personal Library
      </Typography>
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
        <AuthorsPage />
      </Box>
    </Container>
  );
}

export default App;
