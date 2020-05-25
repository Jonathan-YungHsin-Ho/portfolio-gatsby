import React from "react"
import ModeProvider from "../contexts/ModeContext"
import Layout from "../components/layout"
import SkillCategory from "../components/skillCategory"
import { skillsFrontEnd, skillsBackEnd } from "../content/skills"

const SkillsPage = () => (
  <ModeProvider>
    <Layout>
      <h2>Skills & Tech Stack</h2>
      <div className="skills-content">
        <div className="skills-block">
          <h3>Front-End</h3>
          <div className="skills-categories">
            {skillsFrontEnd.map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </div>
        </div>
        <div className="skills-block">
          <h3>Back-End</h3>
          <div className="skills-categories">
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
