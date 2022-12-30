import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';

interface ContactProps {
  linkedin: string;
  github: string;
  email: string;
  location: string;
}
export const Contact = ({
  linkedin,
  github,
  email,
  location,
}: ContactProps): JSX.Element => {
  const iconColor = useColorModeValue('gray.600', 'gray.300');
  return (
    <>
      <Flex
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        py={4}
        alignItems="center"
      >
        <Box as={FaMapMarkerAlt} size="16px" color="gray.500" mr={1} />
        <Text mt={1}>{location}</Text>
      </Flex>
      <Text
        fontWeight="bold"
        color={useColorModeValue('gray.600', 'gray.300')}
        my={2}
      >
        Contact
      </Text>
      <Flex justifyContent="space-between">
        <Link href={`https://linkedin.com/in/${linkedin}`} isExternal>
          <Box as={FaLinkedin} size="32px" color={iconColor} mx={3} />
        </Link>
        <Link href={`https://github.com/${github}`} isExternal>
          <Box as={FaGithubSquare} size="32px" color={iconColor} mx={3} />
        </Link>
        <Link href={`mailto:${email}`} isExternal>
          <Box as={FaEnvelopeSquare} size="32px" color={iconColor} mx={3} />
        </Link>
      </Flex>
    </>
  );
};
