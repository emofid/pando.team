import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

class Team extends React.Component {
  getImageURL(avatar) {
    console.log(avatar)
    return 'https://regexone.com/cs/images/favicon.png'
  }

  render() {
    const { data } = this.props
    const members = data.allMarkdownRemark.edges

    return (
      <Fragment>
        <h3>This is our team members</h3>

        <article>
          {members.map(({ node }) => {
            return (
              <div key={node.id} className="member">
                <img src={this.getImageURL(node.frontmatter)} alt={node.frontmatter.name} />
                <h4>{node.frontmatter.name}</h4>
              </div>
            )
          })}
        </article>

        <Link to="/"> Home Page </Link>
      </Fragment>
    )
  }
}

export default Team

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
  }
`
