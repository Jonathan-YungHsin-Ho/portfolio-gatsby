import React from "react"

import { useModeContext } from "../contexts/ModeContext"

import { FaCaretLeft, FaCaretRight } from "react-icons/fa"

const Thumbnails = ({
  projects,
  handleSelect,
  handlePrev,
  handleNext,
  num,
}) => {
  const {
    mode: { darkMode },
  } = useModeContext()

  const thumbnailWrapperStyle = {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    width: `30rem`,
    margin: `4rem auto 0`,
  }

  const arrowStyle = {
    fontSize: `2rem`,
    cursor: `pointer`,
    color: darkMode ? `rgba(255, 255, 255, 0.87)` : `#121212`,
  }

  return (
    <div style={thumbnailWrapperStyle}>
      <FaCaretLeft onClick={handlePrev} style={arrowStyle} />
      {projects.map(project => (
        <div
          className="thumbnail"
          style={{
            backgroundColor: project.thumbnail,
            border:
              project.number === num &&
              (darkMode
                ? `2px solid rgba(255, 255, 255, 0.87)`
                : `2px solid #121212`),
          }}
          key={project.number}
          onClick={() => handleSelect(project.number)}
        ></div>
      ))}
      <FaCaretRight onClick={handleNext} style={arrowStyle} />
    </div>
  )
}

export default Thumbnails
