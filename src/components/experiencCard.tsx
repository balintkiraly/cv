import { Box, Flex, Text } from '@chakra-ui/core';
import React from 'react';

import { DataRange } from './dataRange';

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

    <Flex flexDirection="row" mt={3}>
      {technologies.map((technology: { color: string; name: string }) => (
        <Flex
          flexDirection="row"
          alignItems="center"
          fontSize="xs"
          color="gray.600"
        >
          <Box
            bg={technology.color}
            mr={1}
            p={1}
            rounded={10}
            w="14px"
            h="14px"
          />
          <Text mr={4}>{technology.name}</Text>
        </Flex>
      ))}
    </Flex>
  </Box>
);
