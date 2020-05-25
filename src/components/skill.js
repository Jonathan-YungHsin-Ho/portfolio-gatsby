import React from "react"
import { useModeContext } from "../contexts/ModeContext"
import Icon from "../svgIcons"

export default function Skill({ skill }) {
  const {
    mode: { darkMode },
  } = useModeContext()

  return (
    <div className="skill-row" style={{ display: `flex` }}>
      <span
        style={{
          fontSize: `2rem`,
          marginRight: (skill.icon || skill.svg) && `0.5rem`,
        }}
      >
        {skill.icon}
        {skill.svg && (
          <Icon name={skill.svg} fill={darkMode ? "whitesmoke" : "#101010"} />
        )}
      </span>
      <span>{skill.skill}</span>
    </div>
  )
}
