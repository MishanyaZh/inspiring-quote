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

import AuthorDetailsPage from "../pges/AuthorDetailsPage";
import BookDetailsPage from "../pges/BookDetailsPage";
import UserDetailsPage from "../pges/UserDetailsPage";
import AnythingDetailsPage from "../pges/AnythingDetailsPage";
import EverythingPage from "../pges/EverythingPage";

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
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="books/search/:searchQuery" element={<BooksPage />} />
          <Route path="books/search/" element={<BooksPage />} />
          <Route path="books/:bookId" element={<BookDetailsPage />} />

          <Route path="authors/" element={<AuthorsPage />} />
          <Route path="authors/search/:searchQuery" element={<AuthorsPage />} />
          <Route path="/authors/search/" element={<AuthorsPage />} />
          <Route path="authors/:authorId" element={<AuthorDetailsPage />} />

          <Route path="users/" element={<UsersPage />} />
          <Route path="users/:userId" element={<UserDetailsPage />} />

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
