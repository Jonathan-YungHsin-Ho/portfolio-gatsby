import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ name, title }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      borderBottom: `1px solid silver`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {name} <span className="weight-normal">{title}</span>
        </Link>
      </h1>
    </div>
    <div>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </header>
)

Header.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
}

Header.defaultProps = {
  name: ``,
  title: ``,
}

export default Header
