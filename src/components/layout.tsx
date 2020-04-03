import { Box, Button,Flex, Image, Text } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from './container';
import { NavBar } from './nav-bar';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
          description
        }
      }
    }
  `);

  return (
    <React.StrictMode>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.name}`}
        defaultTitle={data.site.siteMetadata.name}
      >
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

      <NavBar />

      <Container>
        <Flex flexDirection={['column', 'column', 'row']}>
          <Flex flexDirection={['row', 'row', 'column']} pr={6}>
            <Box size={['120px', '220px', '280px']} px={[2, 2, 0]}>
              <Image
                src="https://avatars2.githubusercontent.com/u/3306242?s=460&u=022fffa2f9b9c77b23506c3a5f92bccf6e8d6ac3&v=4"
                borderRadius={4}
                objectFit="cover"
                w="100%"
              />
            </Box>
            <Flex flexDirection="column" alignItems="justifyContent">
              <Text px={[2, 2, 0]} py={[0, 0, 4]} fontSize="3xl">
                Bálint Király
              </Text>
              <Button border="1px" borderColor="gray.300" size="sm">
                Contact
              </Button>
            </Flex>
          </Flex>
          <Box px={5} size="100%">
            {children}
          </Box>
        </Flex>
      </Container>

      <footer>{/* TODO */}</footer>
    </React.StrictMode>
  );
}
