import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import PageIntro from '../components/PageIntro'
import Map from '../components/Map'
import PageHeroSlider from '../components/PageHeroSlider'
import PageRegularCardsSection from '../components/PageRegularCardsSection'
import PageIrregularCardsSection from '../components/PageIrregularCardsSection'
import PageMapSection from '../components/PageMapSection'
import PageKaufenPropertySection from '../components/PageKaufenPropertySection'
import PageMietenProperty from '../components/PageMietenProperty'
import PageOrderSection from '../components/PageOrderSection'
import PageReferenceSection from '../components/PageReferenceSection'
import PageOffsetCardsSection from '../components/PageOffsetCardsSection'
import PageRichTextSection from '../components/PageRichTextSection'

const HomePage = () => {

    const data = useStaticQuery(graphql`
    query HomePageQuery {
        prismicPage(data: {page_path: {eq: "/"}}) {
            data {
              body {
                ... on PrismicPageBodyHeroSlider {
                  id
                  items {
                    hero_images {
                      localFile {
                        childImageSharp {
                            fluid(maxWidth: 1920, quality: 100) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                      }
                    }
                  }
                  fields: primary {
                    section_id
                    heading
                    ribbon_text
                    ribbon_link{
                        url
                        document{
                          data{
                            page_path
                          }
                        }
                    }
                  }
                  slice_type
                }
                ... on PrismicPageBodyIntroText {
                  primary {
                    section_id
                    body1 {
                      html
                    }
                    heading {
                      html
                    }
                  }
                  slice_type
                }
                ... on PrismicPageBodyIrregularCards {
                  id
                  items {
                    card_heading
                    card_body {
                      html
                    }
                    card_link{
                        url
                        document{
                          data{
                            page_path
                          }
                        }
                    }
                  }
                  primary {
                    section_id
                    background_image {
                      localFile {
                        childImageSharp {
                            fluid(maxWidth: 1920, quality: 100) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                      }
                      alt
                    }
                    section_heading
                  }
                  slice_type
                }
                ... on PrismicPageBodyRegularCards {
                  id
                  primary{
                    section_id
                    section_heading
                  }
                  items {
                    card_body {
                      html
                    }
                    card_link{
                        url
                        document{
                          data{
                            page_path
                          }
                        }
                    }
                    card_image {
                      localFile {
                        childImageSharp {
                            fluid(maxWidth: 460, quality: 100) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                      }
                      alt
                    }
                    cardHeading:heading
                    small_heading
                  }
                  slice_type
                }
                ... on PrismicPageBodyKaufenPropertySection {
                  slice_type
                  primary{
                    section_id
                  }
                }
                ... on PrismicPageBodyMietenProperty {
                  slice_type
                  primary{
                    section_id
                  }
                }
                ... on PrismicPageBodyOffsetCards {
                  slice_type
                  primary {
                    section_id
                    section_heading
                  }
                  items {
                    card_text
                    card_small_heading
                    card_link {
                      url
                      document{
                        data{
                          page_path
                        }
                      }
                    }
                    card_cover {
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 450, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                      alt
                    }
                  }
                }
                ... on PrismicPageBodyReferenceSection {
                  slice_type
                  primary{
                    section_id
                  }
                }
                ... on PrismicPageBodyRichTextSection {
                  slice_type
                  primary {
                    section_id
                    body1 {
                      html
                    }
                  }
                }
                ... on PrismicPageBodySimpleOrderSection {
                  slice_type
                  primary {
                    section_id
                    body1 {
                      html
                    }
                    button_link {
                      url
                      document{
                        data{
                          page_path
                        }
                      }
                    }
                    button_text
                    cardHeading:heading
                    order_number
                    image {
                      alt
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 460, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                  }
                  items {
                    select_heading_content_body {
                      html
                    }
                    select_heading_content_heading
                  }
                }
              }
            }
        }
      }
    `)

      console.log(data)

    return(
        <React.Fragment>
            {   
                data.prismicPage.data.body &&
                data.prismicPage.data.body.length > 0 &&
                data.prismicPage.data.body.map(slice => {
                    switch(slice.slice_type){
                        case 'hero_slider':
                            return <PageHeroSlider data={slice}/>
                        case 'intro_text':
                            return <PageIntro data={slice} />
                        case 'regular_cards':
                            return  <PageRegularCardsSection data={slice}/>
                        case 'irregular_cards':
                            return <PageIrregularCardsSection data={slice}/>
                        case 'kaufen_property_section':
                            return <PageKaufenPropertySection data={slice}/>
                        case 'mieten_property':
                            return <PageMietenProperty data={slice}/>
                        case 'simple_order_section':
                            return <PageOrderSection data={slice}/>
                        case 'reference_section':
                            return <PageReferenceSection data={slice}/>
                        case 'offset_cards':
                            return <PageOffsetCardsSection data={slice}/>
                        case 'rich_text_section':
                            return <PageRichTextSection data={slice}/>
                        default:
                            return
                    }
                })
            }
            {/* <PageMapSection/> */}
            {/* <Section>
                <h2>AKTUELLE IMMOBILIEN</h2>
                <OffsetItemContainer>
                    <RealEstateItem 
                        link='/immobilien-entry'
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                    <RealEstateItem 
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                    <RealEstateItem 
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                </OffsetItemContainer>
            </Section>
            <BigImageSection image={background3} title={'IMMOBILIEN SIND VOLLER TRÄUME. LASSEN WIR SIE WAHR WERDEN.'}>
                <LinkRibbons links={[{href:'/', text:'Dienstleistungen'}, {href:'/', text:'Dienstleistungen'}]}/>
            </BigImageSection>
            <Section>
                <h2>REFERENZEN</h2>
                <Reference videoLink={'https://www.youtube.com/embed/ZK9wtYOcChQ'} image={referenceImg} quote={'Es gibt nur eine – und das ist Cristina Cotoia.'}/>
                <Reference videoLink={'https://www.youtube.com/embed/ZK9wtYOcChQ'} image={referenceImg} quote={'Es gibt nur eine – und das ist Cristina Cotoia.'}/>
                <div class={styles.referenceButtonContainer}>
                    <ButtonBordered>
                        <Link to='/referenzen'>
                            Zu allen Referenzen
                        </Link>
                    </ButtonBordered>
                </div>
            </Section> */}
        </React.Fragment>
    )
}

export default HomePage