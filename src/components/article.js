import React from "react"
import { Link } from "gatsby"

const articleStyle = {
  paddingBottom: `1rem`,
  borderBottom: `1px dotted silver`,
}

export default props => (
  <Link to={props.to}>
    <article key={props.id} style={articleStyle}>
      <h3>{props.title}</h3>
      <div style={{ marginBottom: `0.5rem` }}>
        {props.date} - {props.time}
      </div>
      <div>{props.excerpt}</div>
    </article>
  </Link>
)
