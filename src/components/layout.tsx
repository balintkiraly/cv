import {
  Box,
  Button,
  ColorModeProvider,
  Flex,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import {
  FaDribbbleSquare,
  FaEnvelope,
  FaEnvelopeSquare,
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaRedditSquare,
} from 'react-icons/fa';

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
          email
          githubUsername
        }
      }
    }
  `);

  return (
    <React.StrictMode>
      <ColorModeProvider>
        <Helmet
          titleTemplate={`%s - ${data.site.siteMetadata.name}`}
          defaultTitle={data.site.siteMetadata.name}
        >
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
        </Helmet>

        <NavBar />

        <Container>
          <Flex flexDirection={['column', 'column', 'row']}>
            <Flex flexDirection={['column', 'row', 'column']} pr={[0, 6]}>
              <Box size={['100%', '220px', '280px']} px={[1, 2, 0]}>
                <Image
                  src="https://avatars2.githubusercontent.com/u/3306242?s=460&u=022fffa2f9b9c77b23506c3a5f92bccf6e8d6ac3&v=4"
                  borderRadius={4}
                  objectFit="cover"
                  w="100%"
                />
              </Box>
              <Flex
                flexDirection="column"
                alignItems="justifyContent"
                px={[2, 2, 0]}
              >
                <Text pt={[0, 0, 4]} fontSize="3xl">
                  Bálint Király
                </Text>
                <Text color="gray.500" pb={4}>
                  {data.site.siteMetadata.email}
                </Text>
                <Button
                  border="1px"
                  borderColor="gray.300"
                  size="sm"
                  my={2}
                  as="a"
                  href={`https://github.com/${data.site.siteMetadata.githubUsername}`}
                >
                  View GitHub profile
                </Button>
                <Text fontSize="xl" my={2}>
                  Contact
                </Text>
                <Flex justifyContent="space-between">
                  <Box
                    as={FaFacebookSquare}
                    size="32px"
                    color="gray.600"
                    mx={3}
                  />
                  <Box
                    as={FaDribbbleSquare}
                    size="32px"
                    color="gray.600"
                    mx={3}
                  />
                  <Box as={FaLinkedin} size="32px" color="gray.600" mx={3} />
                  <Box
                    as={FaEnvelopeSquare}
                    size="32px"
                    color="gray.600"
                    mx={3}
                  />
                </Flex>
              </Flex>
            </Flex>
            <Box px={[1, 5]} size="100%" pt={[4, 0]}>
              {children}
            </Box>
          </Flex>
        </Container>

        <footer>{/* TODO */}</footer>
      </ColorModeProvider>
    </React.StrictMode>
  );
}
