/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// const React = require("react")
// const Layout = require("./src/components/layout").default
// const ModeProvider = require("./src/contexts/ModeContext").default

// window.onresize = function () {
//   document.body.height = window.innerHeight
// }
// window.onresize()

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty("--app-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", appHeight)
appHeight()

// exports.wrapPageElement = ({ element, props }) => {
//   return (
//     <ModeProvider>
//       <Layout {...props}>{element}</Layout>
//     </ModeProvider>
//   )
// }
