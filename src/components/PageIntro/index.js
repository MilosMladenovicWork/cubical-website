import React from 'react'

import styles from './page-intro.module.scss'
import Section from '../Section'
import AppearOnViewContainer from '../AppearOnViewContainer'

const PageIntro = ({title, children}) => {
    return(
        <Section>
            <AppearOnViewContainer>
                <h1>{title}</h1>
            </AppearOnViewContainer>
            <AppearOnViewContainer>
                <div className={styles.introText}>
                    {children}
                </div>
            </AppearOnViewContainer>
        </Section>
    )
}

export default PageIntro