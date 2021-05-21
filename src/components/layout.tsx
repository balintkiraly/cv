import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Contact } from './contact';
import { Container } from './container';
import { NavBar } from './navBar';
import { TabList } from './tab/tabList';

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
          contact {
            email
            github
            linkedin
            facebook
            location
          }
        }
      }
    }
  `);

  return (
    <Box bg={useColorModeValue('white', 'gray.900')}>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.name}`}
        defaultTitle={data.site.siteMetadata.name}
      >
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

      <NavBar />

      <Container>
        <Flex flexDirection={['column', 'column', 'row']}>
          <Flex
            flexDirection={['column', 'row', 'column']}
            pr={[0, 6]}
            maxW="100%"
            pb={[0, 6, 0]}
          >
            <Image
              src="/avatar.jpeg"
              borderRadius={4}
              objectFit="cover"
              maxW={['100%', '50%', '100%']}
            />
            <Flex
              flex={1}
              flexDirection="column"
              alignItems="justifyContent"
              px={[2, 2, 0]}
            >
              <Text pt={[0, 0, 4]} fontSize="3xl">
                Bálint Király
              </Text>
              <Text color={useColorModeValue('gray.500', 'gray.400')} pb={4}>
                {data.site.siteMetadata.contact.email}
              </Text>
              <Button
                border="1px"
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                size="sm"
                my={2}
                as="a"
                href={`https://github.com/${data.site.siteMetadata.contact.github}`}
              >
                View GitHub profile
              </Button>
              <Contact {...data.site.siteMetadata.contact} />
            </Flex>
          </Flex>
          <Box px={[1, 5]} w="100%" pt={[4, 0]}>
            <TabList />
            {children}
          </Box>
        </Flex>
      </Container>

      <footer>{/* TODO */}</footer>
    </Box>
  );
}
