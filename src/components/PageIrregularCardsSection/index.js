import React from 'react'

import styles from './page-irregular-cards-section.module.scss'
import background4 from '../../img/dienstleistungen.png'
import BigImageSection from '../../components/BigImageSection'
import RandomWidthItem from '../../components/RandomWidthItem'

const PageIrregularCardsSection = ({data}) => {
  
  if(data){
      return(
        <BigImageSection id={(data && data.primary && data.primary.section_id) ? data.primary.section_id : ''} image={data.primary.background_image && data.primary.background_image.localFile.childImageSharp.fluid}>
            {
                data.primary.section_heading &&
                <h2>{data.primary.section_heading}</h2>
            }
            {
                data.items &&
                data.items.length > 0 &&
                <ul className={styles.ourServicesContainer}>
                {
                    data.items.map(card => {
                        return <RandomWidthItem data={card} link='/dienstleistungen/verkaufen/' />

                    })
                }
                </ul>
            }
        </BigImageSection>
      )
  }else{
    return <></>
  }

}

export default PageIrregularCardsSection