import React from "react"
import Layout from "../components/Layout"
import styles from "./blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Nisi ut ipsum eiusmod esse adipisicing do laborum ea enim est sit quis
          ex cillum. Velit adipisicing sunt eiusmod esse aute do magna ad. Ea
          magna cillum amet culpa nulla elit cupidatat ad id cupidatat pariatur
          voluptate. Anim ut ullamco quis elit ipsum voluptate. Non aute tempor
          proident dolore culpa exercitation adipisicing consectetur magna non.
        </p>
      </div>
    </Layout>
  )
}

export default blog
