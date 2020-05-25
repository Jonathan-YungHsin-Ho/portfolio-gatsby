import React from "react"

import { FaExternalLinkAlt } from "react-icons/fa"

import ProjectLink from "./projectLink"

const Project = ({ project }) => {
  const projectLinksStyle = {
    flexShrink: 0,
    display: `flex`,
    overflowX: `auto`,
  }

  const externalLinkStyle = {
    color: project.iconColor,
    position: `relative`,
    bottom: `2.7rem`,
    right: `1rem`,
  }

  return (
    <div>
      <a href={project.site} target="_blank" rel="noopener noreferrer">
        <div className="project-image">
          <div>{project.image}</div>
          <div
            style={{
              display: `flex`,
              justifyContent: `flex-end`,
            }}
          >
            <FaExternalLinkAlt style={externalLinkStyle} />
          </div>
        </div>
      </a>
      <div style={projectLinksStyle}>
        {project.links?.map(link => (
          <ProjectLink key={link.url} link={link} />
        ))}
      </div>
      <div>
        <div>
          {project.fields &&
            Object.entries(project.fields).map(([key, value]) => (
              <div className="project-field" key={key}>
                <h3 style={{ flexShrink: "0" }}>{key}:</h3>
                <p>{value}</p>
              </div>
            ))}
          <div className="project-responsibilities">
            {project.responsibilities && <h3>Responsibilities:</h3>}
            <ul style={{ listStylePosition: `outside`, paddingLeft: `2rem` }}>
              {project.responsibilities?.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div className="project-fields">
            {project.stack &&
              Object.entries(project.stack).map(([key, value]) => (
                <div className="project-field" key={key}>
                  <h3 style={{ flexShrink: "0" }}>{key}:</h3>
                  <p>{value}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
