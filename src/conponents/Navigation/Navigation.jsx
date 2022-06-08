import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const Navigation = () => {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Link to="/" as={RouterLink} underline="none" color="inherit">
          <BottomNavigationAction
            showLabel
            label="Books"
            icon={<MenuBookIcon />}
          />
        </Link>
        <Link to="/authors" as={RouterLink} underline="none" color="inherit">
          <BottomNavigationAction
            showLabel
            label="Authors"
            icon={<EmojiObjectsIcon />}
          />
        </Link>
        <Link to="/users" as={RouterLink} underline="none" color="inherit">
          <BottomNavigationAction
            showLabel
            label="Users"
            icon={<PeopleAltIcon />}
          />
        </Link>
      </Box>
    </>
  );
};

export default Navigation;
