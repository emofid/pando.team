import React from "react"
import Layout from "../components/layout"

export default class Members extends React.Component {
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
      memberImages[node.relativePath] = node.publicURL
    })

    this.setState({ memberImages })
  }

  render() {
    const { members, memberImages } = this.state
    return (
      <div>
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
      </div>
    )
  }
}
