import { Badge, Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { BiBookOpen, BiBuilding, BiHome, BiPen } from 'react-icons/bi';

import { TabLink } from './tabLink';

export const TabList = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      educations: allFile(
        filter: {
          internal: { mediaType: { eq: "text/markdown" } }
          sourceInstanceName: { eq: "educations" }
        }
      ) {
        edges {
          node {
            id
          }
        }
      }
      experiences: allFile(
        filter: {
          internal: { mediaType: { eq: "text/markdown" } }
          sourceInstanceName: { eq: "experiences" }
        }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  return (
    <Flex
      w="100%"
      borderBottom="1px"
      borderBottomColor={useColorModeValue('gray.300', 'gray.600')}
      alignItems="center"
    >
      <TabLink to="/">
        <Box
          as={BiHome}
          size="16px"
          color={useColorModeValue('gray.600', 'gray.400')}
          mr={2}
        />
        Overview
      </TabLink>
      <TabLink to="/educations">
        <Box
          as={BiBookOpen}
          size="16px"
          color={useColorModeValue('gray.600', 'gray.400')}
          mr={2}
        />
        Educations
        <Badge
          rounded={5}
          color={useColorModeValue('gray.600', 'gray.400')}
          m={1}
        >
          {data.educations.edges.length}
        </Badge>
      </TabLink>
      <TabLink to="/experiences">
        <Box
          as={BiBuilding}
          size="16px"
          color={useColorModeValue('gray.600', 'gray.400')}
          mr={2}
        />
        Experiences
        <Badge
          rounded={5}
          color={useColorModeValue('gray.600', 'gray.400')}
          m={1}
        >
          {data.experiences.edges.length}
        </Badge>
      </TabLink>
    </Flex>
  );
};
