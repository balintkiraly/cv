import { Box, Flex, Text } from '@chakra-ui/core';
import React from 'react';

interface TechnologyLabelProps {
  name: string;
  color: string;
}
export const TechnologyLabel = ({
  name,
  color,
}: TechnologyLabelProps): JSX.Element => (
  <Flex
    flexDirection="row"
    alignItems="center"
    fontSize="xs"
    color="gray.600"
    mb={1}
  >
    <Box bg={color} mr={1} p={1} rounded={10} w="14px" h="14px" />
    <Text mr={4}>{name}</Text>
  </Flex>
);
