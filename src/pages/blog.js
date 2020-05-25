import React from "react"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <ModeProvider>
    <Layout>
      <SEO title="Blog" />
      <h2>Blog</h2>
    </Layout>
  </ModeProvider>
)

export default BlogPage
