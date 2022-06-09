import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const UserDetails = ({ user }) => {
  return (
    <Box alignItems="center">
      <Box alignItems="center" direction="column" w="100%" mt="5">
        <img
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
          src={user.avatar.image.url}
          alt={user.name}
        />
        <Typography variant="h6" component="h6" mb={1}>
          {user.name}
        </Typography>
      </Box>
      <Box as="article">{user.info}</Box>
    </Box>
  );
};

export default UserDetails;
