import React from "react"

import Apollo from "./Apollo"
import Axios from "./Axios"
import Django from "./Django"
import Jest from "./Jest"
import Knex from "./Knex"
import Netlify from "./Netlify"
import Prisma from "./Prisma"
import Redux from "./Redux"
import SQL from "./SQL"
import Zeit from "./Zeit"

const Icon = props => {
  switch (props.name) {
    case "apollo":
      return <Apollo {...props} />
    case "axios":
      return <Axios {...props} />
    case "django":
      return <Django {...props} />
    case "jest":
      return <Jest {...props} />
    case "knex":
      return <Knex {...props} />
    case "netlify":
      return <Netlify {...props} />
    case "prisma":
      return <Prisma {...props} />
    case "redux":
      return <Redux {...props} />
    case "sql":
      return <SQL {...props} />
    case "zeit":
      return <Zeit {...props} />
    default:
      return <div />
  }
}

export default Icon
