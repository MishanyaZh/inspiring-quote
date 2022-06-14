import Link from "../Link";

import Box from "@mui/material/Box";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import styled from "@emotion/styled";

const Navigation = () => {
  return (
    <>
      <Box
        sx={{
          width: "310px",
          display: "flex",
          justifyContent: "space-evenly",
          margin: "0 auto",
        }}
      >
        <Link to="/books/search/" underline="none" color="inherit">
          <BottomNavigationActionStyled
            showLabel
            label="Books"
            icon={<MenuBookIcon />}
          />
        </Link>
        <Link to="/authors/search/" underline="none" color="inherit">
          <BottomNavigationActionStyled
            showLabel
            label="Authors"
            icon={<EmojiObjectsIcon />}
          />
        </Link>
        <Link to="/users/search/" underline="none" color="inherit">
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
