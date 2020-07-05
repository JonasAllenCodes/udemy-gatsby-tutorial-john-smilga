import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

const ComponentName = () => (
  <StaticQuery
    query={getData}
    render={(data) => (
      <div>
        <h1>StaticQuery</h1>
        <h2>Long Form: Structured Data</h2>
        <h3>Description: {data.site.info.description}</h3>
      </div>
    )}
  ></StaticQuery>
)

export default ComponentName
