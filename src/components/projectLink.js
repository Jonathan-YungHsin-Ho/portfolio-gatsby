import React from "react"

const ProjectLink = ({ link }) => {
  return (
    <div style={{ marginRight: `2rem`, flexShrink: 0 }}>
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
