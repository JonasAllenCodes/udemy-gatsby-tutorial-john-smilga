import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image2.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)

  console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%" alt="dog looking at fence" />
      </article>
      <article className="single-image">
        <h3>Fixed Image/Blur</h3>
        <Image
          fixed={data.fixed.childImageSharp.fixed}
          alt="skateboard stall"
        />
      </article>
      <article className="single-image">
        <h3>Fluid Image/SVG</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} alt="green eyeball" />
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid} alt="green eyeball" />
        </div>
      </article>
    </section>
  )
}

export default Images
