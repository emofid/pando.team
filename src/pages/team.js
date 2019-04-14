import React, {Fragment} from 'react';
import { graphql, Link } from "gatsby"

export default ({data}) => {
  console.log(data.allMarkdownRemark.edges);
  const members = data.allMarkdownRemark.edges;
  return (
    <Fragment>
      <h3>This is our team members</h3>

      <article>
        {
          members.map(({node}) => {
            return (
              <div key={node.id}>{
                node.frontmatter.name
              }</div>
            )
          })
        }
      </article>

      <Link to="/"> Home Page </Link>
    </Fragment>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: {
        fields: frontmatter___position
        order: ASC
      }
    )
    {
      edges {
        node {
          id
          frontmatter {
            position
            name
            job
            linkedin
          }
          html
          excerpt
        }
      }
    }
  }
`