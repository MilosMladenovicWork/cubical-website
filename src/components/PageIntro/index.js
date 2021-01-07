import React from 'react'

import styles from './page-intro.module.scss'
import Section from '../Section'
import AppearOnViewContainer from '../AppearOnViewContainer'

const PageIntro = ({data, children}) => {

    if(data){
        return(
            <Section id={(data.primary && data.primary.section_id) ? data.primary.section_id : ''}>
                <div className={styles.contentRow}>
                    {data.primary.heading &&
                        <AppearOnViewContainer>
                            <div className={styles.heading} dangerouslySetInnerHTML={{__html:data.primary.heading.html}}></div>
                        </AppearOnViewContainer>
                    }
                    {data.primary.body1 && 
                        <AppearOnViewContainer>
                            <div className={styles.introText} dangerouslySetInnerHTML={{__html:data.primary.body1.html}}>
                            </div>
                        </AppearOnViewContainer>
                    }
                </div>
            </Section>
        )
    }else{
        return <></>
    }
}

export default PageIntro