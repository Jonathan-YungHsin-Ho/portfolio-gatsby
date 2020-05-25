import React from "react"

const ProjectLink = ({ link }) => {
  return (
    <div className="project-link">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: `flex`, alignItems: `center` }}
      >
        {link.icon} {link.text}
      </a>
    </div>
  )
}

export default ProjectLink
