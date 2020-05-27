/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const name = "Jonathan Yung-Hsin Ho"
  const title = "Software Engineer"

  let vh

  if (typeof window !== `undefined`) {
    window.addEventListener("resize", () => {
      vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    })
  }

  return (
    <div className="layout-container">
      <Header name={name} title={title} />
      <div
        className="main-wrapper"
        // style={{
        //   height: `calc(var(--vh, 1vh) * 100 - 156px)`,
        //   overflowX: `hidden`,
        //   padding: `0 1.0875rem 0`,
        // }}
      >
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 630,
            paddingTop: `1rem`,
            paddingBottom: `1rem`,
          }}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
