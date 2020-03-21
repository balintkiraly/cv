import React from 'react';
import { ThemeProvider, Box, Flex, Link, Image, Text } from '@chakra-ui/core';

export const NavBar = () => (
  <Flex
    bg="#24292e"
    w="100%"
    px={5}
    py={4}
    justifyContent="space-between"
    alignItems="center"
  >
    <Flex flexDirection="row" justifyContent="center" alignItems="center">
      <Image src="https://placehold.it/34x34" size={30} />
      <Text pl={3} color="white">
        Logo
      </Text>
    </Flex>
    <Box>
      <Link px={2} color="white">
        Link
      </Link>
    </Box>
  </Flex>
);
