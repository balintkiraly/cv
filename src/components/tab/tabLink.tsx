import { Flex, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

interface TabLinkProps {
  to: string;
  children: any;
}
export const TabLink = ({ to, children }: TabLinkProps): JSX.Element => (
  <ChakraLink
    fontSize="sm"
    color={useColorModeValue('gray.600', 'gray.400')}
    as="div"
    py={2}
    mr={3}
    borderBottom="2px"
    borderColor="transparent"
    _hover={{
      textDecoration: 'none',
      borderBottom: '2px gray solid',
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
