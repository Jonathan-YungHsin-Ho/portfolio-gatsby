import React from "react"
import { IoMdDocument } from "react-icons/io"
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"
import { FiSun, FiMoon } from "react-icons/fi"

import { useDarkMode } from "../hooks/useDarkMode"
import { useModeContext } from "../contexts/ModeContext"

import Resume from "../documents/resume.pdf"

const OtherLinks = () => {
  const [darkMode, setDarkMode] = useDarkMode(false)

  const { dispatch } = useModeContext()

  const toggleMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
    dispatch({ type: "SET_MODE", payload: darkMode })
  }

  return (
    <div className="footer">
      <div className="footer-links">
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <IoMdDocument className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-y-ho/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="footer-icon" />
        </a>
        <a
          href="https://github.com/Jonathan-YungHsin-Ho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icon" />
        </a>
        <a
          href="https://twitter.com/JonathanHoDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="footer-icon" />
        </a>
        <a
          href="mailto:jonathan.yunghsin.ho@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="footer-icon" />
        </a>
        {darkMode ? (
          <FiSun onClick={toggleMode} className="footer-icon footer-toggle" />
        ) : (
          <FiMoon onClick={toggleMode} className="footer-icon footer-toggle" />
        )}
      </div>
    </div>
  )
}

export default OtherLinks
