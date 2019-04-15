import React from "react"

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
      <article className="members row">
        {members.map(({ node }) => {
          return (
            <div key={node.id} className="member col-md-4 col-xs-12">
              <img
                src={memberImages[node.frontmatter.avatar]}
                alt={node.frontmatter.name}
              />
              <h3>{node.frontmatter.name}</h3>
              <h5>{node.frontmatter.job}</h5>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          )
        })}
      </article>
    )
  }
}
