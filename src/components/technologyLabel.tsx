import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
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
    color={useColorModeValue('gray.600', 'gray.400')}
    mb={1}
  >
    <Box bg={color} mr={1} p={1} rounded={10} w="14px" h="14px" />
    <Text mr={4}>{name}</Text>
  </Flex>
);
