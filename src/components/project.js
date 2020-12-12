import React from "react"

import { FaExternalLinkAlt } from "react-icons/fa"

import ProjectLink from "./projectLink"

const Project = ({ project }) => {
  return (
    <div>
      <a href={project.site} target="_blank" rel="noopener noreferrer">
        <div className={project.site && "project-image"}>
          <div>{project.image}</div>
          <div className="external-link-wrapper">
            {project.site && (
              <FaExternalLinkAlt
                className="external-link"
                style={{
                  color: project.iconColor,
                }}
              />
            )}
          </div>
        </div>
      </a>
      <div className="project-links">
        {project.links?.map(link => (
          <ProjectLink key={link.url} link={link} />
        ))}
      </div>
      <div>
        <div>
          {project.fields &&
            Object.entries(project.fields).map(([key, value]) => (
              <div className="project-field" key={key}>
                <h3>{key}:</h3>
                <p>{value}</p>
              </div>
            ))}
          <div className="project-responsibilities">
            {project.responsibilities && <h3>Responsibilities:</h3>}
            <ul>
              {project.responsibilities?.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div className="project-fields">
            {project.stack &&
              Object.entries(project.stack).map(([key, value]) => (
                <div className="project-field" key={key}>
                  <h3>{key}:</h3>
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
