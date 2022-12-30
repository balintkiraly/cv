import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { DataRange } from './dataRange';
import { TechnologyLabel } from './technologyLabel';

interface ExperiencCardProps {
  title: string;
  technologies: {
    color: string;
    name: string;
  }[];
  postions: {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}

export const ExperiencCard = ({
  title,
  technologies,
  postions,
}: ExperiencCardProps): JSX.Element => {
  const colors = {
    position: useColorModeValue('gray.500', 'gray.300'),
    description: useColorModeValue('gray.600', 'gray.300'),
  };

  return (
    <Box
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      py={4}
    >
      <Text fontSize="xl" color="blue.500" fontWeight="bold" pb={2}>
        {title}
      </Text>

      {postions?.map(
        (position: {
          name: string;
          startDate: string;
          endDate: string;
          description: string;
        }) => (
          <>
            <Flex align="top" justifyContent="space-between" flexDir="column">
              <Text fontSize="md" color={colors.position} fontWeight="bolder">
                {position.name}
              </Text>
              <DataRange
                startDate={position.startDate}
                endDate={position?.endDate}
              />
            </Flex>
            <Text fontSize="xs" pb={2} color={colors.description}>
              {position.description}
            </Text>
          </>
        ),
      )}

      <Flex flexDirection="row" flexWrap="wrap" mt={3}>
        {technologies.map((technology: { color: string; name: string }) => (
          <TechnologyLabel {...technology} />
        ))}
      </Flex>
    </Box>
  );
};
