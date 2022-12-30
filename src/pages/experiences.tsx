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
          technologies={node.childMarkdownRemark.frontmatter.technologies}
          postions={node.childMarkdownRemark.frontmatter.positions}
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
      sort: {
        fields: childMarkdownRemark___frontmatter___startDate
        order: DESC
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              title
              startDate(formatString: "DD MMMM, YYYY")
              technologies {
                name
                color
              }
              positions {
                name
                startDate(formatString: "MMM YYYY")
                endDate(formatString: "MMM YYYY")
                description
              }
            }
            excerpt
          }
        }
      }
    }
  }
`;
