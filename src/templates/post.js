import React from "react"
import { graphql } from "gatsby"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <ModeProvider>
      <Layout>
        <div>
          <h2>{post.frontmatter.title}</h2>
          <div>
            {post.frontmatter.date} - {post.fields.readingTime.text} (
            {post.fields.readingTime.words} words)
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="blog-post"
          ></div>
        </div>
      </Layout>
    </ModeProvider>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        keywords
      }
      fields {
        readingTime {
          text
          words
        }
      }
    }
  }
`
