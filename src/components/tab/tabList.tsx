import { Badge, Flex } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

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
      borderBottomColor="gray.300"
      alignItems="center"
    >
      <TabLink to="/">Overview</TabLink>
      <TabLink to="/educations">
        Educations
        <Badge rounded={5} color="gray.600" m={1}>
          {data.educations.edges.length}
        </Badge>
      </TabLink>
      <TabLink to="/experiences">
        Experiences
        <Badge rounded={5} color="gray.600" m={1}>
          {data.experiences.edges.length}
        </Badge>
      </TabLink>
    </Flex>
  );
};
