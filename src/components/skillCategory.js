import React from "react"
import Skill from "./skill"

export default function SkillCategory({ category }) {
  return (
    <div className="skill-category" style={{ margin: `0 5.5rem 1.75rem 0` }}>
      <h4>{category.category}</h4>
      {category.skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  )
}
