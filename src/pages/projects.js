import React from "react"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"

const ProjectsPage = () => (
  <ModeProvider>
    <Layout>
      <h2>Projects</h2>
    </Layout>
  </ModeProvider>
)

export default ProjectsPage
