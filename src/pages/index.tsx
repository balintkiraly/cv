import {
  Badge,
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/core';
import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../components/layout';

export default function IndexPage({ data }: any): JSX.Element {
  return (
    <Layout>
      <Tabs variantColor="orange">
        <TabList w="100%">
          <Tab>
            Educations
            <Badge rounded={5} color="gray.500" m={1}>
              {data.educations.edges.length}
            </Badge>
          </Tab>
          <Tab>
            Experiences{' '}
            <Badge rounded={5} color="gray.500" m={1}>
              {data.experiences.edges.length}
            </Badge>
          </Tab>
        </TabList>

        <TabPanels mt={5}>
          <TabPanel>
            {data.educations.edges.map(({ node }) => (
              <Box
                key={node.id}
                borderBottomWidth="1px"
                borderBottomColor="gray.200"
                py={4}
              >
                <Text fontSize="xl" color="blue.500" fontWeight="bold" pb={2}>
                  {node.childMarkdownRemark.frontmatter.title}
                </Text>
                <Text fontSize="xs" color="gray.600">
                  {node.childMarkdownRemark.excerpt}
                </Text>
                <Text fontSize="xs" pt={1} color="gray.600">
                  {node.childMarkdownRemark.frontmatter.startDate} -{' '}
                  {node.childMarkdownRemark.frontmatter.endDate}
                </Text>
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            {data.experiences.edges.map(({ node }) => (
              <Box
                key={node.id}
                borderBottomWidth="1px"
                borderBottomColor="gray.200"
                py={4}
              >
                <Text fontSize="xl" color="blue.500" fontWeight="bold" pb={2}>
                  {node.childMarkdownRemark.frontmatter.title}
                </Text>
                <Text fontSize="xs" color="gray.600">
                  {node.childMarkdownRemark.excerpt}
                </Text>
                <Text fontSize="xs" pt={1} color="gray.600">
                  {node.childMarkdownRemark.frontmatter.startDate} -{' '}
                  {node.childMarkdownRemark.frontmatter.endDate && ' '}
                </Text>

                <Flex flexDirection="row" mt={3}>
                  {node.childMarkdownRemark.frontmatter.technologies.map(
                    (technology) => (
                      <Flex
                        flexDirection="row"
                        alignItems="center"
                        fontSize="xs"
                        color="gray.600"
                      >
                        <Box
                          bg={technology.color}
                          mr={1}
                          p={1}
                          rounded={10}
                          w="14px"
                          h="14px"
                        />
                        <Text mr={4}>{technology.name}</Text>
                      </Flex>
                    ),
                  )}
                </Flex>
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}

export const query = graphql`
  query {
    educations: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "educations" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              title
              startDate(formatString: "DD MMMM, YYYY")
              endDate(formatString: "DD MMMM, YYYY")
            }
            excerpt
          }
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
          childMarkdownRemark {
            id
            frontmatter {
              title
              startDate(formatString: "DD MMMM, YYYY")
              endDate(formatString: "DD MMMM, YYYY")
              technologies {
                name
                color
              }
            }
            excerpt
          }
        }
      }
    }
  }
`;
