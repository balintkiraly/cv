import { Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface DataRangeProps {
  startDate: string;
  endDate: string;
}
export const DataRange = ({
  startDate,
  endDate,
}: DataRangeProps): JSX.Element => {
  const textColor = useColorModeValue('gray.600', 'gray.500');

  return (
    <Text fontSize="xs" pt={1} color={textColor}>
      {startDate !== 'Invalid date' && startDate} -{' '}
      {(endDate !== 'Invalid date' && endDate) || 'Present'}
    </Text>
  );
};
