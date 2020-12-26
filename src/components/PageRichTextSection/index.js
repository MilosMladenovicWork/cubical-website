import React from 'react'

import Section from '../../components/Section'
import MarginContainer from '../../components/MarginContainer'
import styles from './page-rich-text-section.module.scss'

const PageRichTextSection = ({data}) => {
  return(
    <React.Fragment>
      <MarginContainer/>
      <Section>
          <div className={styles.content} dangerouslySetInnerHTML={{__html:data.primary.body1 && data.primary.body1.html}}>
          </div>
      </Section>
    </React.Fragment>
  )
}

export default PageRichTextSection