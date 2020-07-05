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
      <h1>useStaticQuery</h1>
      <h2>Long Form: Structured Data</h2>
      <h3>Title: {data.site.info.title}</h3>
      <h3>Name : {data.site.info.person.name}</h3>
      <h2>Short Form: Destructured Data</h2>
      <h3>Title: {title}</h3>
      <h3>Name: {name}</h3>
    </div>
  )
}

export default Header
