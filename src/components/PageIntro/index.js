import React from 'react'

import styles from './page-intro.module.scss'
import Section from '../Section'

const PageIntro = ({title, children}) => {
    return(
        <Section>
            <h1>{title}</h1>
            <div className={styles.introText}>
                {children}
            </div>
        </Section>
    )
}

export default PageIntro