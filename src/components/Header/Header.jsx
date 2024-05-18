import React from "react";
import { Logo } from "..";
import { Box, Heading } from "@chakra-ui/react";
function Header() {
  return (
    <Box
      textAlign="center"
      py={10}
      px={5}
      bgGradient="linear(to-r, teal.500, green.500)"
      borderRadius="lg"
      boxShadow="2xl"
    >
      <Heading
        as="h1"
        size="2xl"
        mb={4}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
      >
        <Logo />
      </Heading>
    </Box>
  );
}

export default Header;
