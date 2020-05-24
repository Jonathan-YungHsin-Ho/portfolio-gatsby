import React from "react"
import { Link } from "gatsby"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const vertLineStyle = {
  margin: `5rem 0 5rem`,
  height: `10rem`,
  width: `0.1rem`,
  border: `1px solid #121212`,
}

const IndexPage = () => (
  <ModeProvider>
    <Layout>
      <SEO title="Home" />
      <h1>Hello, I'm Jonathan.</h1>
      <p>Full-stack software engineer and web developer.</p>
      <p>12+ years experience in public and independent education.</p>
      <p>Lifelong learner who thrives in diverse team environments.</p>
      <Link to="/projects">
        <button>View recent projects</button>
      </Link>
      <div style={vertLineStyle}></div>
      <About />
    </Layout>
  </ModeProvider>
)

export default IndexPage
