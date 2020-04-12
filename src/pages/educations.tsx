import { graphql } from 'gatsby';
import React from 'react';

import { EducationCard } from '../components/educationCard';
import { Layout } from '../components/layout';

// eslint-disable-next-line import/no-default-export
export default function IndexPage({ data }: any): JSX.Element {
  return (
    <Layout>
      {data.educations.edges.map(({ node }: any) => (
        <EducationCard
          key={node.id}
          title={node.childMarkdownRemark.frontmatter.title}
          institute={node.childMarkdownRemark.frontmatter.institute}
          startDate={node.childMarkdownRemark.frontmatter.startDate}
          endDate={node.childMarkdownRemark.frontmatter.endDate}
          description={node.childMarkdownRemark.excerpt}
        />
      ))}
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
  }
`;
