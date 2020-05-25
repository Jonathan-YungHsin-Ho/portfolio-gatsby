import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Article from "../components/article"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              fields {
                slug
                readingTime {
                  text
                  words
                }
              }
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article
            id={node.id}
            to={node.fields.slug}
            keywords={node.frontmatter.keywords}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            time={node.fields.readingTime.text}
            words={node.fields.readingTime.words}
          />
        ))}
      </div>
    )}
  />
)
