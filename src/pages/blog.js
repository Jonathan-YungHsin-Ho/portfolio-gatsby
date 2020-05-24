import React from "react"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"

const BlogPage = () => (
  <ModeProvider>
    <Layout>
      <h2>Blog</h2>
    </Layout>
  </ModeProvider>
)

export default BlogPage
