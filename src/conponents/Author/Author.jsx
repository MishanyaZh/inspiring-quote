import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Author = ({ author }) => {
  return (
    <Box
      m={2}
      border={"1px solid grey"}
      borderRadius={"5px"}
      bgcolor={"darkgrey"}
      width={"200px"}
    >
      <img
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
        src={author.photo.url}
        alt={author.name}
      />
      <Typography variant="h6" component="h6" mb={1}>
        {author.name}
      </Typography>
    </Box>
  );
};

export default Author;
