import { Text } from '@chakra-ui/react';
import React from 'react';

interface DataRangeProps {
  startDate: string;
  endDate: string;
}
export const DataRange = ({
  startDate,
  endDate,
}: DataRangeProps): JSX.Element => (
  <Text fontSize="xs" pt={1} color="gray.600">
    {startDate !== 'Invalid date' && startDate} -{' '}
    {endDate !== 'Invalid date' && endDate}
  </Text>
);
