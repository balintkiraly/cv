import { Box, Flex, Icon, Link, Text } from '@chakra-ui/core';
import React from 'react';
import {
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';

type ContactProps = {
  linkedin: string;
  github: string;
  email: string;
  facebook: string;
  location: string;
};
export const Contact: React.ReactNode = (data: ContactProps) => {
  const { linkedin, facebook, github, email, location } = data;
  return (
    <>
      <Flex
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
        py={4}
        alignItems="center"
      >
        <Box as={FaMapMarkerAlt} size="16px" color="gray.500" mr={1} />
        <Text mt={1}>{location}</Text>
      </Flex>
      <Text fontWeight="bold" color="gray.800" my={2}>
        Contact
      </Text>
      <Flex justifyContent="space-between">
        <Link href={`https://linkedin.com/in/${linkedin}`} isExternal>
          <Box as={FaLinkedin} size="32px" color="gray.600" mx={3} />
        </Link>
        <Link href={`https://github.com/${github}`} isExternal>
          <Box as={FaGithubSquare} size="32px" color="gray.600" mx={3} />
        </Link>
        <Link href={`https://facebook.com/${facebook}`} isExternal>
          <Box as={FaFacebookSquare} size="32px" color="gray.600" mx={3} />
        </Link>
        <Link href={`mailto:${email}`} isExternal>
          <Box as={FaEnvelopeSquare} size="32px" color="gray.600" mx={3} />
        </Link>
      </Flex>
    </>
  );
};
