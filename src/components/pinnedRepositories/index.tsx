import { SimpleGrid } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Repository } from './repository';

export const PinnedRepositories = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      repositories: allFile(
        filter: {
          internal: { mediaType: { eq: "text/markdown" } }
          sourceInstanceName: { eq: "repositories" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              id
              frontmatter {
                title
                description
                link
                technologies {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <SimpleGrid columns={2} spacing={10} my={3}>
      {data.repositories.edges.map(({ node }: any) => (
        <Repository
          title={node.childMarkdownRemark.frontmatter.title}
          link={node.childMarkdownRemark.frontmatter.link}
          description={node.childMarkdownRemark.frontmatter.description}
          technologies={node.childMarkdownRemark.frontmatter.technologies}
        />
      ))}
    </SimpleGrid>
  );
};
