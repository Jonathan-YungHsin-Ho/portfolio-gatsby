import React, { useState } from "react"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import Thumbnails from "../components/thumbnails"

import { projects } from "../content/projects"

const ProjectsPage = () => {
  const [project, setProject] = useState(
    projects.find(project => project.number === 1)
  )

  const handleSelect = num =>
    setProject(projects.filter(proj => proj.number === num)[0])

  const handlePrev = () =>
    setProject(
      projects.filter(
        proj => proj.number === (project.number === 1 ? 8 : project.number - 1)
      )[0]
    )

  const handleNext = () =>
    setProject(
      projects.filter(
        proj => proj.number === (project.number === 8 ? 1 : project.number + 1)
      )[0]
    )

  return (
    <ModeProvider>
      <Layout>
        <SEO title="Projects" />
        <h2>Projects</h2>
        <Thumbnails
          projects={projects}
          handleSelect={handleSelect}
          handlePrev={handlePrev}
          handleNext={handleNext}
          num={project.number}
        />
        <Project project={project} />
      </Layout>
    </ModeProvider>
  )
}

export default ProjectsPage
