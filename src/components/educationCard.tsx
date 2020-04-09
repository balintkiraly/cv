import { Box, BoxProps, Text } from '@chakra-ui/core';
import React from 'react';

import { DataRange } from './dataRange';

interface EducationCardProps extends BoxProps {
  title: string;
  institute: string;
  description: string;
  startDate: string;
  endDate: string;
}

export const EducationCard = ({
  title,
  institute,
  description,
  startDate,
  endDate,
  ...props
}: EducationCardProps): JSX.Element => (
  <Box borderBottomWidth="1px" borderBottomColor="gray.200" py={4} {...props}>
    <Text fontSize="xl" color="blue.500" fontWeight="bold">
      {title}
    </Text>
    <Text fontSize="md" color="gray.500" fontWeight="bolder" pb={2}>
      {institute}
    </Text>
    <Text fontSize="xs" color="gray.600">
      {description}
    </Text>
    <DataRange startDate={startDate} endDate={endDate} />
  </Box>
);
