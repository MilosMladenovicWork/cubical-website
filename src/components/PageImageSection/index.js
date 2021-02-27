import React from 'react'
import Image from 'gatsby-image'

import styles from './page-image-section.module.scss'
import Section from '../Section'
import AppearOnViewContainer from '../AppearOnViewContainer'

const PageImageSection = ({data}) => {

  return (
    <Section>
      <AppearOnViewContainer>

        <div className={styles.sectionContainer} id={(data && data.primary && data.primary.section_id) ? data.primary.section_id : ''}>
          {
            data &&
            data.primary &&
            data.primary.above_image_text &&
            data.primary.above_image_text.html &&
            <div className={styles.textContent} dangerouslySetInnerHTML={{__html:data.primary.above_image_text.html}}></div>
          }
          {
            data &&
            data.primary &&
            data.primary.image &&
            data.primary.image.localFile &&
            data.primary.image.localFile.childImageSharp &&
            data.primary.image.localFile.childImageSharp.fluid &&
            <div className={styles.image}>
              <Image fluid={data.primary.image.localFile.childImageSharp.fluid} alt={data.primary.image.alt}/>
            </div>
          }
        </div>
      </AppearOnViewContainer>
    </Section>
  )
}

export default PageImageSection