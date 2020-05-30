import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ name, title }) => {
  const activeStyle = {
    fontWeight: `bold`,
  }

  return (
    <header>
      <div>
        <h1>
          <Link to="/" className="nav-home">
            <span>{name}</span>
            <span className="clear">.</span>
            <span className="normal-weight">{title}</span>
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
