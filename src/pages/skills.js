import React from "react"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"

const SkillsPage = () => (
  <ModeProvider>
    <Layout>
      <h2>Skills & Tech Stack</h2>
    </Layout>
  </ModeProvider>
)

export default SkillsPage
