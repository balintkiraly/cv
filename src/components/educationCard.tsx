import { Box, Text } from '@chakra-ui/core';
import React from 'react';

type EducationCardProps = {
  title: string;
  institute: string;
  description: string;
  startDate: string;
  endDate: string;
};

export const EducationCard: React.ReactNode = (data: EducationCardProps) => {
  const { title, institute, description, startDate, endDate } = data;

  return (
    <Box borderBottomWidth="1px" borderBottomColor="gray.200" py={4}>
      <Text fontSize="xl" color="blue.500" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="md" color="gray.500" fontWeight="bolder" pb={2}>
        {institute}
      </Text>
      <Text fontSize="xs" color="gray.600">
        {description}
      </Text>
      <Text fontSize="xs" pt={1} color="gray.600">
        {startDate} - {endDate}
      </Text>
    </Box>
  );
};
