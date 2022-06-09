import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const COLORS_BY_TYPENAME = {
  //   Book: "red.200",
  //   Author: "green.200",
  //   User: "blue.200",
  Book: "red",
  Author: "green",
  User: "blue",
};

const NormalizedAnything = ({ normalizedAnything }) => {
  return (
    <Stack
      w="100%"
      my={3}
      bg={COLORS_BY_TYPENAME[normalizedAnything.__typename]}
      p={3}
      overflow="hidden"
      rounded={5}
    >
      <Stack isInline>
        <img
          size="100px"
          rounded={5}
          objectFit="cover"
          src={normalizedAnything.img && normalizedAnything.img.url}
          alt="#"
        />
        <Stack>
          <Typography as="h4" size="sm">
            {normalizedAnything.__typename}
          </Typography>
          <Typography as="h3" size="md">
            {normalizedAnything.name}
          </Typography>
          <Box
            as="article"
            w="300px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {normalizedAnything.info}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NormalizedAnything;
