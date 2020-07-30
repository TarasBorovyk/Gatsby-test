const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulProduct {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error with contentful data", result.errors)
      }

      const productTemplate = path.resolve("./src/templates/product.js")

      result.data.allContentfulProduct.edges.forEach(product => {
        createPage({
          path: `/products/${product.node.slug}/`,
          component: slash(productTemplate),
          context: {
            slug: product.node.slug,
          },
        })
      })
    })
    .catch(error => console.log("Error with contentful data", error))
}