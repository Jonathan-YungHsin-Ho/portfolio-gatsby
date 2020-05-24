import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const headerStyle = {
  // marginBottom: `1.45rem`,
  borderBottom: `1px solid silver`,
  padding: `0.75rem 1rem`,
  display: `flex`,
  alignItems: `baseline`,
  justifyContent: `space-between`,
  flexWrap: `wrap`,
}

const navBarStyle = {
  flexGrow: 1,
  display: `flex`,
  justifyContent: `flex-end`,
  margin: `0.5rem 0 0`,
}

const navBarLinksStyle = {
  width: `30rem`,
  display: `flex`,
  justifyContent: `space-between`,
}

const Header = ({ name, title }) => (
  <header style={headerStyle}>
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
    <div style={navBarStyle}>
      <div style={navBarLinksStyle}>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
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
