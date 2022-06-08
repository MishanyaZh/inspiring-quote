import React from "react";
import { Routes, Route, NavLink as RouterLink } from "react-router-dom";

import AuthorsPage from "../pges/AuthorsPage";
import UsersPage from "../pges/UsersPage";
import BooksPage from "../pges/BooksPage";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function App() {
  const [value, setValue] = React.useState(0);
  return (
    <Container>
      <Link to="/" as={RouterLink} underline="none" color="inherit">
        <Typography variant="h2" component="h2" m={2} textAlign="center">
          Personal Library
        </Typography>
      </Link>
      <Box sx={{ textAlign: "center" }}>
        <Link to="/" as={RouterLink} underline="none" color="inherit">
          <BottomNavigationAction
            showLabel
            label="Books"
            icon={<MenuBookIcon />}
          />
        </Link>
        <Link to="/authors" as={RouterLink} underline="none" color="inherit">
          <BottomNavigationAction showLabel label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to="/users" as={RouterLink} underline="none" color="inherit">
          <BottomNavigationAction
            showLabel
            label="Users"
            icon={<PeopleAltIcon />}
          />
        </Link>
      </Box>

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
          <Route path="/" element={<BooksPage />} />
          <Route path="authors/" element={<AuthorsPage />} />
          <Route path="users/" element={<UsersPage />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
