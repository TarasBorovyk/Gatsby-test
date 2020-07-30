import React from "react"
import { graphql } from "gatsby"

const Product = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{data.product.name}</h1>
      <p>{data.product.description}</p>
    </div>
  )
}

export default Product

export const pageQuery = graphql`
  query($slug: String!) {
    product: contentfulProduct(slug: { eq: $slug }) {
      slug
      name
      description
    }
  }
`