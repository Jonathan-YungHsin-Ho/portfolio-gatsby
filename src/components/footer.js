import React from "react"

const Footer = () => (
  <footer>
    <div>
      <a href="" target="_blank" rel="noopener noreferrer">
        R
      </a>
      <a
        href="https://www.linkedin.com/in/jonathan-y-ho/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LI
      </a>
      <a
        href="href='https://github.com/Jonathan-YungHsin-Ho'"
        target="_blank"
        rel="noopener noreferrer"
      >
        GH
      </a>
      <a
        href="https://twitter.com/JonathanHoDev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tw
      </a>
      <a
        href="mailto:jonathan.yunghsin.ho@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        E
      </a>
    </div>
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </div>
  </footer>
)

export default Footer
