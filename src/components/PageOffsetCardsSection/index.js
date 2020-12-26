import React, {useEffect, useState} from 'react'

import OffsetItemContainer from '../../components/OffsetItemContainer'
import RealEstateItem from '../../components/SlidingOverlayItem'
import Section from '../../components/Section'
import ButtonBordered from '../../components/ButtonBordered'
import realEstateItemImage from '../../img/itemImage1.png'

import styles from './page-offset-cards-section.module.scss'

const PageOffsetCardsSection = ({data}) => {
  const [numOfLoadedItems, setNumOfLoadedItems] = useState(5)
    const [scrollFromTop, setScrollFromTop] = useState(0)

    const setScrollPosition = () => {
        setScrollFromTop(window.pageYOffset)
    }

    useEffect(() => {   
        window.scrollTo(0, scrollFromTop)
    }, [numOfLoadedItems])

  return (
    <Section>
      {
        data.primary.section_heading &&
        <h1>{data.primary.section_heading}</h1>
      }
      {
        data.items &&
        data.items.length > 0 &&
        <OffsetItemContainer>
            {data.items.map((item, index) => {
                if(index < numOfLoadedItems){
                    return <RealEstateItem 
                                link={item.card_link && item.card_link.url}
                                text={item.card_text && item.card_text}
                                image={item.card_cover && item.card_cover.localFile.childImageSharp.fluid}
                                heading={item.card_small_heading}
                                alt={item.card_cover && item.card_cover.alt}
                            />
                }
            })}
        </OffsetItemContainer>
      }
      {
        numOfLoadedItems < data.items.length &&
        <div className={styles.seeMoreButton}>
            <ButtonBordered onClick={() => {setScrollPosition();setNumOfLoadedItems(prevState => prevState + 5)}}>
                Mehr Anzeigen
            </ButtonBordered>
        </div>

      }
    </Section>
  )
}

export default PageOffsetCardsSection