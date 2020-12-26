import React from 'react'

import styles from './page-intro.module.scss'
import Section from '../Section'
import AppearOnViewContainer from '../AppearOnViewContainer'

const PageIntro = ({data, children}) => {

    if(data){
        return(
            <Section>
                {data.primary.heading &&
                    <AppearOnViewContainer>
                        <div dangerouslySetInnerHTML={{__html:data.primary.heading.html}}></div>
                    </AppearOnViewContainer>
                }
                {data.primary.body1 && 
                    <AppearOnViewContainer>
                        <div className={styles.introText} dangerouslySetInnerHTML={{__html:data.primary.body1.html}}>
                        </div>
                    </AppearOnViewContainer>
                }
            </Section>
        )
    }else{
        return <></>
    }
}

export default PageIntro