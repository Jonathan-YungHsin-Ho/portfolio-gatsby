import React from "react"
import { IoMdDocument } from "react-icons/io"
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"

const footerStyle = {
  position: `absolute`,
  bottom: 0,
  right: 0,
  padding: `1rem 3rem`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
}

const footerLinksStyle = {
  width: `32rem`,
  display: `flex`,
  justifyContent: `space-between`,
}

const footerCopyrightStyle = {
  marginTop: `1rem`,
  fontSize: `1.1rem`,
}

const Footer = () => (
  <footer style={footerStyle}>
    <div style={footerLinksStyle}>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <IoMdDocument />
      </a>
      <a
        href="https://www.linkedin.com/in/jonathan-y-ho/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="href='https://github.com/Jonathan-YungHsin-Ho'"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/JonathanHoDev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href="mailto:jonathan.yunghsin.ho@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </a>
    </div>
    <div style={footerCopyrightStyle}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline dotted" }}
      >
        Gatsby
      </a>
    </div>
  </footer>
)

export default Footer
