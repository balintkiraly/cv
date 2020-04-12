import { Flex, Link as ChakraLink } from '@chakra-ui/core';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

interface TabLinkProps {
  to: string;
  children: any;
}
export const TabLink = ({ to, children }: TabLinkProps): JSX.Element => (
  <ChakraLink
    fontSize="sm"
    color="gray.600"
    as="div"
    py={2}
    mr={3}
    borderBottom="2px"
    borderColor="white"
    _hover={{
      textDecoration: 'none',
      borderBottom: '2px lightgray solid',
      boxSizing: 'border-box',
    }}
  >
    <GatsbyLink
      to={to}
      activeStyle={{
        fontWeight: 'bold',
      }}
    >
      <Flex alignItems="center" p={2} height="42px">
        {children}
      </Flex>
    </GatsbyLink>
  </ChakraLink>
);
