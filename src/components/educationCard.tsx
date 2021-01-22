import { Box, BoxProps, Text, useColorModeValue } from '@chakra-ui/react';
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
  <Box
    borderBottomWidth="1px"
    borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    py={4}
    {...props}
  >
    <Text fontSize="xl" color="blue.500" fontWeight="bold">
      {title}
    </Text>
    <Text
      fontSize="md"
      color={useColorModeValue('gray.500', 'gray.300')}
      fontWeight="bolder"
      pb={2}
    >
      {institute}
    </Text>
    <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
      {description}
    </Text>
    <DataRange startDate={startDate} endDate={endDate} />
  </Box>
);
