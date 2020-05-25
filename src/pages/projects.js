import React from "react"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <ModeProvider>
    <Layout>
      <SEO title="Projects" />
      <h2>Projects</h2>
    </Layout>
  </ModeProvider>
)

export default ProjectsPage
