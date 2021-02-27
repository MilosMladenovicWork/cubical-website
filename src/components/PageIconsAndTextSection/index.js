import React from 'react'
import Image from 'gatsby-image'

import styles from './page-icons-and-text-section.module.scss'

const PageIconsAndTextSection = ({data}) => {

  console.log(data)

  return(
    data &&
    <div className={styles.container}>
        {
          data.primary &&
          data.primary.above_icons_text &&
          data.primary.above_icons_text.html &&
          <div className={styles.aboveIconsContainer} dangerouslySetInnerHTML={{__html: data.primary.above_icons_text.html}}>
          </div>
        }
      <div className={styles.iconsContainer}>
        {
          data.items &&
          data.items.map(item => {
            return <div className={styles.iconCard}>
              {
                item.icon1 &&
                item.icon1.localFile &&
                item.icon1.localFile.childImageSharp &&
                item.icon1.localFile.childImageSharp.fixed &&
                <Image fixed={item.icon1.localFile.childImageSharp.fixed} alt={item.icon1.alt}/>
              }
              {
                item.below_icon_text &&
                item.below_icon_text.html &&
                <div className={styles.cardContent} dangerouslySetInnerHTML={{__html:item.below_icon_text.html}}></div>
              }
            </div>
          })
        }
      </div>
    </div>
  )
}

export default PageIconsAndTextSection