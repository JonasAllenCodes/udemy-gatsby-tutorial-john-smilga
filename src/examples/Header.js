import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
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

export const Header = () => {
  // Long Form: Structured Data
  const data = useStaticQuery(getData)

  // Short Form: Destructured Data
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h2>useStaticQuery</h2>
      <h3>Long Form: Structured Data</h3>
      <h4>Title: {data.site.info.title}</h4>
      <h4>Name : {data.site.info.person.name}</h4>
      <h3>Short Form: Destructured Data</h3>
      <h4>Title: {title}</h4>
      <h4>Name: {name}</h4>
    </div>
  )
}

export default Header
