import React from "react"
import { GrGatsbyjs } from "react-icons/gr"

const Footer = () => {
  return (
    <footer className="footer-copyright">
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrGatsbyjs className="footer-icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
