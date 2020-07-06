import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image2.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        fixed(width: 300) {
          src
        }
      }
    }
    fluid: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const Images = () => {
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
      </article>
      <article className="single-image">
        <h3>Fixed Image/Blur</h3>
      </article>
      <article className="single-image">
        <h3>Fluid Image/SVG</h3>
      </article>
    </section>
  )
}

export default Images
