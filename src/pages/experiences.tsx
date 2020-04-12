import { graphql } from 'gatsby';
import React from 'react';

import { ExperiencCard } from '../components/experiencCard';
import { Layout } from '../components/layout';

// eslint-disable-next-line import/no-default-export
export default function IndexPage({ data }: any): JSX.Element {
  return (
    <Layout>
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
    </Layout>
  );
}

export const query = graphql`
  query {
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
