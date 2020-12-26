import React from 'react'
import {SwiperSlide} from 'swiper/react'
import {useStaticQuery, graphql, Link} from 'gatsby'

import styles from './index.module.scss'
import Slider from '../components/Slider'

import imgSlide1 from '../img/home-page.png'
import background3 from '../img/background3.png'
import background4 from '../img/dienstleistungen.png'
import BackgroundImage from '../components/BackgroundImage'
import Section from '../components/Section'
import Reference from '../components/Reference'
import ButtonBordered from '../components/ButtonBordered'
import PageIntro from '../components/PageIntro'
import BigImageSection from '../components/BigImageSection'
import LinkRibbons from '../components/LinkRibbons'
import ImageInfoItem from '../components/ImageInfoItem'
import RandomWidthItem from '../components/RandomWidthItem'
import RealEstateItem from '../components/SlidingOverlayItem'
import OffsetItemContainer from '../components/OffsetItemContainer'
import ScrollScreenButton from '../components/ScrollScreenButton'
import downArrowImg from '../img/chevron-down-outline.svg'
import Map from '../components/Map'
import realEstateItemImage from '../img/itemImage1.png'
import popularSectionImg from '../img/popular-section1.png'
import referenceImg from '../img/background1.jpg'
import AppearOnViewContainer from '../components/AppearOnViewContainer'
import TiltableContainer from '../components/TiltableContainer'
import MotoText from '../components/MotoText'
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
                    heading
                    ribbon_text
                    ribbon_link{
                        url
                    }
                  }
                  slice_type
                }
                ... on PrismicPageBodyIntroText {
                  primary {
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
                    }
                  }
                  primary {
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
                  items {
                    card_body {
                      html
                    }
                    card_link{
                        url
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
                }
                ... on PrismicPageBodyMietenProperty {
                  slice_type
                }
                ... on PrismicPageBodyOffsetCards {
                  slice_type
                  primary {
                    section_heading
                  }
                  items {
                    card_text
                    card_small_heading
                    card_link {
                      url
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
                }
                ... on PrismicPageBodyRichTextSection {
                  slice_type
                  primary {
                    body1 {
                      html
                    }
                  }
                }
                ... on PrismicPageBodySimpleOrderSection {
                  slice_type
                  primary {
                    body1 {
                      html
                    }
                    button_link {
                      url
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
                            return <PageKaufenPropertySection/>
                        case 'mieten_property':
                            return <PageMietenProperty/>
                        case 'simple_order_section':
                            return <PageOrderSection data={slice}/>
                        case 'reference_section':
                            return <PageReferenceSection/>
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