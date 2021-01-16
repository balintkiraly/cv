import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { DataRange } from './dataRange';
import { TechnologyLabel } from './technologyLabel';

interface ExperiencCardProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: {
    color: string;
    name: string;
  }[];
}

export const ExperiencCard = ({
  title,
  description,
  startDate,
  endDate,
  technologies,
}: ExperiencCardProps): JSX.Element => (
  <Box borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
    <Text fontSize="xl" color="blue.500" fontWeight="bold" pb={2}>
      {title}
    </Text>
    <Text fontSize="xs" color="gray.600">
      {description}
    </Text>
    <DataRange startDate={startDate} endDate={endDate} />

    <Flex flexDirection="row" flexWrap="wrap" mt={3}>
      {technologies.map(({ name, color }: { color: string; name: string }) => (
        <TechnologyLabel name={name} color={color} />
      ))}
    </Flex>
  </Box>
);
