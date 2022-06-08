import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Book = ({ id, title, cover, author }) => {
  return (
    <Box
      m={2}
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      border="1px solid grey"
      borderRadius={"5px"}
      bgcolor={"brown"}
      width={"200px"}
      height={"350px"}
    >
      <Typography variant="h5" component="h5" m={1}>
        {title}
      </Typography>
      <img
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
        src={cover.url}
        alt={title}
      />
      <Typography variant="h6" component="h6" mb={1}>
        {author.name}
      </Typography>
    </Box>
  );
};

export default Book;
