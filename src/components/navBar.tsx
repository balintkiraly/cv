import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const NavBar = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  let colorModeButton;
  if (colorMode === 'light') {
    colorModeButton = (
      <IconButton
        icon={<MoonIcon />}
        variantColor="white"
        onClick={toggleColorMode}
        aria-label="Switch to dark mode"
      />
    );
  } else {
    colorModeButton = (
      <IconButton
        icon={<SunIcon />}
        variant="ghost"
        variantColor="white"
        onClick={toggleColorMode}
        aria-label="Switch to light mode"
      />
    );
  }
  return (
    <Flex
      bg="gray.800"
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Text color="white" fontSize="xl">
          BK
        </Text>
        <Text pl={3} color="white" fontWeight="bold">
          balintkiraly.com
        </Text>
      </Flex>
      <Box>{colorModeButton}</Box>
    </Flex>
  );
};
