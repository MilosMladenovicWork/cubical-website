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
      button_text: String
    }

    type ButtonLink{
      button_link: Url
      button_text: String
    }

    type HTML{
      html: String
    }

    type LeftSideLinks{
      content_background_color:String
      link_content: HTML
    }

    type Fields{
      right_side_links: [Link]
      footer_links: [Link]
      footer_buttons: [ButtonLink]
      left_side_links: [LeftSideLinks]
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
      document: [DocumentLink],
      url: String
    }

    type PrismicPageBodyRegularCards implements Node{
      primary: PrismicPageBodyRegularCardsFields
    }

    type PrismicPageBodyRegularCardsFields {
      section_heading: String
      section_id: String
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

    type PrismicPageBodyHeroSliderPrimary implements Node{
      section_id: String
    }

    type PrismicPageBodyIntroTextPrimary implements Node{
      section_id: String
    }

    type PrismicPageBodyIrregularCardsPrimary implements Node{
      section_id: String
    }

    type PrismicPageBodyRegularCardsFieldsPrimary implements Node{
      section_id: String
    }

    type PrismicPageBodyKaufenPropertySection implements Node{
      section_id: String
    }

    type PrismicPageBodyMietenProperty implements Node{
      section_id: String
    }

    type PrismicPageBodyOffsetCardsPrimary implements Node{
      section_id: String
    }

    type PrismicPageBodyReferenceSection implements Node{
      section_id: String
    }

    type PrismicPageBodyRichTextSectionPrimary implements Node{
      section_id: String
    }

    type PrismicPageBodySimpleOrderSectionPrimary implements Node{
      section_id: String
    }

    type PrismicPageBodyHeroSliderPrimary implements Node{
      section_id: String
    }

    type PrismicPageBodyReferenceSection{
      primary: PrimaryForSectionIdOnlySlices
    }

    type PrismicPageBodyMietenProperty{
      primary: PrimaryForSectionIdOnlySlices
    }

    type PrismicPageBodyKaufenPropertySection{
      primary: PrimaryForSectionIdOnlySlices
    }

    type PrismicPageBodyRegularCardsFields{
      primary: PrimaryForSectionIdOnlySlices
    }

    type PrismicPageBodyRegularCardsItems{
      card_link:PrismicPageBodyRegularCardsItemsCard_link
      heading: String
    }
    
    type PrismicPageBodyOffsetCardsItems{
      card_link: PrismicPageBodyRegularCardsItemsCard_link
    }

    type PrismicPageBodyContactFormSection implements Node{
      primary: PrimaryForSectionIdOnlySlices
    }

    type PrimaryForSectionIdOnlySlices{
      section_id: String
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
  const propertyTemplate = require.resolve('./src/templates/property/index.js')
  
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

        allPrismicProperty{
          edges{
            node{
              data{
                type_of_property
              }
              uid
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

  const properties = result.data.allPrismicProperty.edges
  
  properties.forEach((edge) => {
    if(edge.node.uid){
      createPage({
        path:`/${edge.node.data.type_of_property ? 'mieten' : 'kaufen'}/${edge.node.uid}`,
        component: propertyTemplate,
        context: {
          uid: edge.node.uid
        }
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