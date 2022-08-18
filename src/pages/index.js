import React from "react"
import { Link } from "gatsby"

import ModeProvider from "../contexts/ModeContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const IndexPage = () => (
  <>
    <ModeProvider>
      <Layout>
        <SEO title="Home" />
        <h1 className="landing-header">Hello, I'm Jonathan.</h1>
        <div className="landing-text">
          <p>Full-stack software engineer and web developer.</p>
          <p>Lifelong learner who thrives in diverse team environments.</p>
          <p>Currently a Software Engineer with Rocket Mortgage.</p>
        </div>
        <div className="landing-cta">
          <Link to="/projects">
            <button>View recent projects</button>
          </Link>
        </div>
        <div className="landing-line"></div>
        <About />
      </Layout>
    </ModeProvider>
  </>
)

export default IndexPage
