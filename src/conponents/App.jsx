import { Routes, Route, NavLink as RouterLink } from "react-router-dom";

import HomePage from "../pges/HomePage";
import AuthorsPage from "../pges/AuthorsPage";
import UsersPage from "../pges/UsersPage";
import BooksPage from "../pges/BooksPage";
import Navigation from "./Navigation/Navigation";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function App() {
  return (
    <Container>
      <Link to="/" as={RouterLink} underline="none" color="inherit">
        <Typography variant="h2" component="h2" m={2} textAlign="center">
          Personal Library
        </Typography>
      </Link>

      <Navigation />

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="books/" element={<BooksPage />} />
          <Route path="authors/" element={<AuthorsPage />} />
          <Route path="users/" element={<UsersPage />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
