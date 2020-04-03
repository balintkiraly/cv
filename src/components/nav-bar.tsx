import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let colorModeButton;
  if (colorMode === 'light') {
    colorModeButton = (
      <IconButton
        icon="moon"
        variantColor="white"
        onClick={toggleColorMode}
        aria-label="Switch to dark mode"
      />
    );
  } else {
    colorModeButton = (
      <IconButton
        icon="sun"
        variant="ghost"
        variantColor="white"
        onClick={toggleColorMode}
        aria-label="Switch to light mode"
      />
    );
  }
  return (
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
      <Box>{colorModeButton}</Box>
    </Flex>
  );
};
