import React from "react"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCategory from "../components/skillCategory"

import { skillsFrontEnd, skillsBackEnd } from "../content/skills"

const SkillsPage = () => (
  <ModeProvider>
    <Layout>
      <SEO title="Skills" />
      <h2>Skills & Tech Stack</h2>
      <div>
        <div>
          <h3>Front-End</h3>
          <div className="skills-category">
            {skillsFrontEnd.map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </div>
        </div>
        <div>
          <h3>Back-End</h3>
          <div className="skills-category">
            {skillsBackEnd.map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  </ModeProvider>
)

export default SkillsPage
