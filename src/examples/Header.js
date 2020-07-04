import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
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
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h2>Long Form: Structured Data</h2>
      <h3>Title: {data.site.siteMetadata.title}</h3>
      <h3>Name : {data.site.siteMetadata.person.name}</h3>
      <h2>Short Form: Destructured Data</h2>
      <h3>title: {title}</h3>
      <h3>name: {name}</h3>
    </div>
  )
}

export default Header
