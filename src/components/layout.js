/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import OtherLinks from "./otherLinks"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const name = "Jonathan Yung-Hsin Ho"
  const title = "Software Engineer"

  // let vh

  // if (typeof window !== `undefined`) {
  //   window.addEventListener("resize", () => {
  //     vh = window.innerHeight * 0.01
  //     document.documentElement.style.setProperty("--vh", `${vh}px`)
  //   })
  // }

  return (
    <div className="layout-container">
      <div className="header-wrapper">
        <Header name={name} title={title} />
        <OtherLinks />
      </div>
      <div className="main-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
