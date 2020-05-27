import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { useModeContext } from "../contexts/ModeContext"

const Header = ({ name, title }) => {
  const {
    mode: { darkMode },
  } = useModeContext()

  const activeStyle = {
    textShadow: darkMode
      ? `0 0 1px var(--light-color), 0 0 1px var(--light-color)`
      : `0 0 0.375px var(--dark-color)`,
  }

  return (
    <header>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              display: `flex`,
              flexWrap: `wrap`,
            }}
          >
            <span>{name}</span>
            <span style={{ opacity: 0 }}>.</span>
            <span style={{ fontWeight: `normal` }}>{title}</span>
          </Link>
        </h1>
      </div>
      <div className="nav-bar-container">
        <div className="nav-bar-links">
          <Link to="/projects" activeStyle={activeStyle}>
            Projects
          </Link>
          <Link to="/skills" activeStyle={activeStyle}>
            Skills
          </Link>
          <Link to="/blog" activeStyle={activeStyle}>
            Blog
          </Link>
          <Link to="/contact" activeStyle={activeStyle}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
}

Header.defaultProps = {
  name: ``,
  title: ``,
}

export default Header
