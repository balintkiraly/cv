import { Box, Link, Text } from '@chakra-ui/core';
import React from 'react';

import { TechnologyLabel } from '../technologyLabel';

interface RepositoryProps {
  title: string;
  description: string;
  link: string;
}
export const Repository = ({
  title,
  description,
  link,
}: RepositoryProps): JSX.Element => (
  <Box border="1px" borderColor="gray.300" borderRadius="md" p={4}>
    <Link color="blue.500" fontWeight="bold" href={link}>
      {title}
    </Link>
    <Text fontSize="xs" color="gray.600" my={2}>
      {description}
    </Text>
    <TechnologyLabel color="red.800" name="Ruby" />
  </Box>
);
