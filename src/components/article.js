import React from "react"
import { Link } from "gatsby"

export default props => (
  <Link to={props.to}>
    <article key={props.id}>
      <h3>{props.title}</h3>
      <div className="article-date">
        {props.date} - {props.time}
      </div>
      <div>{props.excerpt}</div>
    </article>
  </Link>
)
