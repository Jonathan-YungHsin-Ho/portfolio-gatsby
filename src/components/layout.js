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

  return (
    <>
      <Header name={name} title={title} />
      <div
        className="layout-container"
        style={{
          height: `calc(100vh - 156px)`,
          // height: `100vh`,
          // marginTop: `-156px`,
          // paddingTop: `156px`,
          overflowX: `hidden`,
          padding: `0 1.0875rem 0`,
        }}
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
