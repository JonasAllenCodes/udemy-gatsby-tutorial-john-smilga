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
        <h2>StaticQuery</h2>
        <h3>Long Form: Structured Data</h3>
        <h4>Description: {data.site.info.description}</h4>
      </div>
    )}
  ></StaticQuery>
)

export default ComponentName
