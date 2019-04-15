import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"

class Team extends React.Component {
  state = {
    members: [],
    memberImages: [],
  }

  componentDidMount() {
    this.setMembers()
    this.setMemberImages()
  }

  setMembers = () => {
    const { data } = this.props
    const members = data.allMarkdownRemark.edges

    this.setState({ members })
  }

  setMemberImages = () => {
    const {
      data: { allFile },
    } = this.props
    const memberImages = {}

    allFile.edges.forEach(({ node }) => {
      memberImages[node.relativePath] = node.publicURL;
    })

    this.setState({ memberImages })
  }

  render() {
    const { members, memberImages } = this.state
    return (
      <Fragment>
        <h3>This is our team members</h3>

        <article>
          {members.map(({ node }) => {
            return (
              <div key={node.id} className="member">
                <img
                  src={memberImages[node.frontmatter.avatar]}
                  alt={node.frontmatter.name}
                />
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
