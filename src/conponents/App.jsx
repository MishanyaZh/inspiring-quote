import { Routes, Route } from "react-router-dom";

import HomePage from "../pges/HomePage";
import AuthorsPage from "../pges/AuthorsPage";
import UsersPage from "../pges/UsersPage";
import BooksPage from "../pges/BooksPage";
import Navigation from "./Navigation/Navigation";
import Link from "./Link";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AnythingDetailsPage from "../pges/AnythingDetailsPage";
import EverythingPage from "../pges/EverythingPage";
import BookDetailsPage from "../pges/BookDetailsPage";

function App() {
  return (
    <Container>
      <Link to="/">
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
          <Route path="books/:bookId" element={<BookDetailsPage />} />
          <Route path="books/" element={<BooksPage />} />
          <Route path="authors/" element={<AuthorsPage />} />
          <Route path="users/" element={<UsersPage />} />

          <Route
            path="admin/anything/:anyId"
            element={<AnythingDetailsPage />}
          />
          <Route path="admin/everything" element={<EverythingPage />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
