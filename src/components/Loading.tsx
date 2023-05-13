import React from "react";
import { Spinner, Box } from "@chakra-ui/react";

const Loading: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <Spinner size="xl" />
  </Box>
);

export default Loading;
