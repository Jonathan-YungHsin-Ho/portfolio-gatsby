import React from "react"
import { Link } from "gatsby"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const vertLineStyle = {
  margin: `4.75rem 0 4.75rem`,
  height: `8rem`,
  width: `0.1rem`,
  border: `1px solid #121212`,
}

const textStyle = {
  fontSize: `2.2rem`,
}

const IndexPage = () => (
  <ModeProvider>
    <Layout>
      <SEO title="Home" />
      <h1 style={{ fontSize: `2.8rem` }}>Hello, I'm Jonathan.</h1>
      <p style={textStyle}>Full-stack software engineer and web developer.</p>
      <p style={textStyle}>
        12+ years experience in public and independent education.
      </p>
      <p style={textStyle}>
        Lifelong learner who thrives in diverse team environments.
      </p>
      <div style={{ marginTop: `2rem` }}>
        <Link to="/projects">
          <button>View recent projects</button>
        </Link>
      </div>
      <div style={vertLineStyle}></div>
      <About />
    </Layout>
  </ModeProvider>
)

export default IndexPage
