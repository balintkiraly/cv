import { Text } from '@chakra-ui/core';
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
    {startDate} - {endDate}
  </Text>
);
