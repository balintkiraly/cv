import {
  Badge,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/core';
import { graphql } from 'gatsby';
import React from 'react';

import { EducationCard } from '../components/educationCard';
import { ExperiencCard } from '../components/experiencCard';
import { Layout } from '../components/layout';

// eslint-disable-next-line import/no-default-export
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
            {data.educations.edges.map(({ node }: any) => (
              <EducationCard
                key={node.id}
                title={node.childMarkdownRemark.frontmatter.title}
                institute={node.childMarkdownRemark.frontmatter.institute}
                startDate={node.childMarkdownRemark.frontmatter.startDate}
                endDate={node.childMarkdownRemark.frontmatter.endDate}
                description={node.childMarkdownRemark.frontmatter.excerpt}
              />
            ))}
          </TabPanel>
          <TabPanel>
            {data.experiences.edges.map(({ node }: any) => (
              <ExperiencCard
                key={node.id}
                title={node.childMarkdownRemark.frontmatter.title}
                description={node.childMarkdownRemark.excerpt}
                startDate={node.childMarkdownRemark.frontmatter.startDate}
                endDate={node.childMarkdownRemark.frontmatter.endDate}
                technologies={node.childMarkdownRemark.frontmatter.technologies}
              />
            ))}
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
              institute
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
