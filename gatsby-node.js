const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pageTemplate = require.resolve('./src/templates/page/index.js')
  
  const result = await wrapper(
    graphql(`
      {
        allPrismicPage(filter: {data: {page_path: {ne: "/"}}}) {
          edges {
            node {
              data {
                page_path
              }
            }
          }
        }
      }
    `)
  )

  const pages = result.data.allPrismicPage.edges

  pages.forEach((edge) => {
    
    if(edge.node.data.page_path){
      createPage({
        path: `${edge.node.data.page_path}`,
        component: pageTemplate,
        context: {
          page_path: edge.node.data.page_path,
        },
      })
    }
  })
}