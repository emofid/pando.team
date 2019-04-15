import React from "react"
import Layout from "../components/layout"
import Members from "../components/members"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    This is about page
    <Members data={data} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___position, order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            position
            name
            job
            linkedin
            twitter
            instagram
            avatar
          }
          html
          excerpt
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "members" } }) {
      edges {
        node {
          id
          relativePath
          publicURL
        }
      }
    }
  }
`
