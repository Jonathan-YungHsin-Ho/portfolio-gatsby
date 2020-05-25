import React from "react"
import { Link } from "gatsby"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const textStyle = {
  fontSize: `2.2rem`,
}

const IndexPage = () => (
  <ModeProvider>
    <Layout>
      <SEO title="Home" />
      <h1 style={{ fontSize: `2.8rem` }}>Hello, I'm Jonathan.</h1>
      <div style={textStyle}>
        <p>Full-stack software engineer and web developer.</p>
        <p>12+ years experience in public and independent education.</p>
        <p>Lifelong learner who thrives in diverse team environments.</p>
      </div>
      <div style={{ marginTop: `2rem` }}>
        <Link to="/projects">
          <button>View recent projects</button>
        </Link>
      </div>
      <div className="landing-line"></div>
      <About />
    </Layout>
  </ModeProvider>
)

export default IndexPage
