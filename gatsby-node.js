const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type PrismicLayout implements Node {
      prismicLayout: PrismicLayout
    }

    type PrismicPage implements Node {
      prismicPage: PrismicPage
    }

    type Url{
      url: String
    }

    type Link{
      link: Url
    }

    type Fields{
      right_side_links: [Link]
      footer_links: [Link]
      left_side_links: [Link]
      link_hover_icons: [Link]
      links: [Link]
      right_side_link_hover_icons: [Link]
      sublinks: [Link]
      logo_text: String
    }

    type PrismicLayout {
      data:Fields
    }

    type PageFields {
      icon: Url
      seo_description: String
      seo_lang_code: String
      seo_title: String
      theme_color: String
      website_url: Url
    }

    type PagePath{
      page_path: String
    }

    type DocumentLink {
      data: PagePath
    }

    type PrismicPageBodyRegularCardsItemsCard_link implements Node {
      document: [DocumentLink]
    }

    type PrismicPageBodyRegularCards implements Node{
      primary: PrismicPageBodyRegularCardsFields
    }

    type PrismicPageBodyRegularCardsFields {
      section_heading: String
    }

    type PrismicPageBodyOffsetCardsItemsCard_link implements Node {
      document: [DocumentLink]
    }

    type PrismicPageBodySimpleOrderSectionPrimaryButton_link implements Node {
      document: [DocumentLink]
    }

    type PrismicPageBodyIrregularCardsItemsCard_link implements Node {
      document: [DocumentLink]
    }
    
    type PrismicPageBodyHeroSliderPrimaryRibbon_link implements Node{
      document: [DocumentLink]
    }

    type PrismicPage{
      data:PageFields
    }
  `
  createTypes(typeDefs)
}

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

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("build-javascript")) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-spring/,
            sideEffects: true
          }
        ]
      }
    })
  }
}