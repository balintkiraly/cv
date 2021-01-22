import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { GoRepo } from 'react-icons/go';

import { TechnologyLabel } from '../technologyLabel';

interface RepositoryProps {
  title: string;
  description: string;
  link: string;
  technologies: { color: string; name: string }[];
}
export const Repository = ({
  title,
  description,
  link,
  technologies,
}: RepositoryProps): JSX.Element => (
  <Flex
    flexDirection="column"
    border="1px"
    borderColor={useColorModeValue('gray.300', 'gray.600')}
    borderRadius="md"
    justifyContent="space-between"
    p={4}
  >
    <Box>
      <Flex alignItems="center">
        <Box
          as={GoRepo}
          size="16px"
          color={useColorModeValue('gray.600', 'gray.400')}
          mr={2}
        />
        <Link color="blue.500" fontWeight="bold" href={link}>
          {title}
        </Link>
      </Flex>
      <Text
        fontSize="xs"
        color={useColorModeValue('gray.600', 'gray.400')}
        my={2}
      >
        {description}
      </Text>
    </Box>
    <Flex flexDirection="row" flexWrap="wrap" mt={3}>
      {technologies.map((technology: { color: string; name: string }) => (
        <TechnologyLabel {...technology} />
      ))}
    </Flex>
  </Flex>
);
