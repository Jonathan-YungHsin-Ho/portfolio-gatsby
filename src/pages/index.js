import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello, I'm Jonathan.</h1>
    <p>Full-stack software engineer and web developer.</p>
    <p>12+ years experience in public and independent education.</p>
    <p>Lifelong learner who thrives in diverse team environments.</p>
    <div>
      <Link to="/projects">View recent projects</Link>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h2>About Me</h2>
  </Layout>
)

export default IndexPage
