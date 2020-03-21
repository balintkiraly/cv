import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Text,
  TabPanel,
  Badge,
  Box,
  Flex,
} from '@chakra-ui/core';
import { Layout } from '../components/layout';
import { graphql } from 'gatsby';

export default function IndexPage({ data }): JSX.Element {
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
                <Text fontSize="xl" color="blue.500">
                  {node.childMarkdownRemark.frontmatter.title}
                </Text>
                <Text>
                  {node.childMarkdownRemark.frontmatter.startDate} -{' '}
                  {node.childMarkdownRemark.frontmatter.endDate}
                </Text>
                <Text>{node.childMarkdownRemark.excerpt}</Text>
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
                <Text fontSize="xl" color="blue.500">
                  {node.childMarkdownRemark.frontmatter.title}
                </Text>
                <Text>
                  {node.childMarkdownRemark.frontmatter.startDate} -{' '}
                  {node.childMarkdownRemark.frontmatter.endDate}
                </Text>
                <Text>{node.childMarkdownRemark.excerpt}</Text>

                <Flex flexDirection="row" mt={3}>
                  {node.childMarkdownRemark.frontmatter.technologies.map(
                    (technology) => (
                      <Flex flexDirection="row" alignItems="center">
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
