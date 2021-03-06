import React, {useState, useEffect} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Section from '../../components/Section'
import ButtonBordered from '../../components/ButtonBordered'
import Reference from '../../components/Reference'
import referenceImg from '../../img/background1.jpg'

import styles from './page-reference-section.module.scss'

const PageReferenceSection = ({data:sliceData}) => {
  
  const [numOfLoadedItems, setNumOfLoadedItems] = useState(1)
  const [scrollFromTop, setScrollFromTop] = useState(0)
    
  const data = useStaticQuery(graphql`
    query PrismicSectionQuery {
        references: allPrismicReference(sort: {fields: last_publication_date, order: DESC}) {
        edges {
            node {
                data {
                    body {
                    html
                    }
                    cover_image {
                        alt
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 940, quality: 100) {
                                  ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    heading
                }
            }
        }
        }
    }
  `)

  const setScrollPosition = () => {
      setScrollFromTop(window.pageYOffset)
  }

  useEffect(() => {   
      window.scrollTo(0, scrollFromTop)
  }, [numOfLoadedItems])

  const dummyArray = [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
  ]
  
  return(
    <Section id={(sliceData && sliceData.primary && sliceData.primary.section_id) ? data.primary.section_id : ''} fullWidth>
        {data.references.edges && data.references.edges.map(({node:reference}, index) => {
            if(index < numOfLoadedItems){
                return <div className={`${styles.referenceItem} ${styles.visibleItem}`}>
                <Reference image={reference.data.cover_image && reference.data.cover_image.localFile.childImageSharp.fluid} alt={reference.data.cover_image && reference.data.cover_image.alt} quote={reference.data.heading} text={
                    <div dangerouslySetInnerHTML={{__html:reference.data.body && reference.data.body.html}}>
                    </div>
                }/>
                </div>
            }
        })}
        {
            data.references.edges && (data.references.edges.length > numOfLoadedItems) &&
            <div className={styles.seeMoreButton}>
                <ButtonBordered onClick={() => {setScrollPosition();setNumOfLoadedItems(prevState => prevState + 5)}}>
                    Mehr Anzeigen
                </ButtonBordered>
            </div>
        }
    </Section>
  )
}

export default PageReferenceSection