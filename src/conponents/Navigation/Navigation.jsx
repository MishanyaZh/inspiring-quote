import React from "react";
import Box from "@mui/material/Box";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import styled from "@emotion/styled";

import Link from "../Link";

const Navigation = () => {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Link to="/books" underline="none" color="inherit">
          <BottomNavigationActionStyled
            showLabel
            label="Books"
            icon={<MenuBookIcon />}
          />
        </Link>
        <Link to="/authors" underline="none" color="inherit">
          <BottomNavigationActionStyled
            showLabel
            label="Authors"
            icon={<EmojiObjectsIcon />}
          />
        </Link>
        <Link to="/users" underline="none" color="inherit">
          <BottomNavigationActionStyled
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

const BottomNavigationActionStyled = styled(BottomNavigationAction)`
  transition: all 0.5s ease-out;
  padding: 5px;
  &:hover,
  :focus {
    color: inherit;
    transform: scale(1.1);
    background: #919ff0;
    border-radius: 60%;
    transition: all 0.5s ease-out;
  }
  &.active {
    background: #919ff0;
    transform: scale(1.1);
    transition: all 0.5s ease-out;
  }
`;
