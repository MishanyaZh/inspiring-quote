import { Link as CustomLink } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
// import  {CustomLink as Link}  from "@mui/material/Link";

const Link = (props) => {
  return (
    <CustomLink underline="none" color="inherit" as={RouterLink} {...props} />
  );
};

export default Link;
