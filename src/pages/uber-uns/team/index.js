import React from 'react'
import MarginContainer from '../../../components/MarginContainer'

import PageIntro from '../../../components/PageIntro'
import Section from '../../../components/Section'
import TextImageBox from '../../../components/TextImageBox'
import styles from './team.module.scss'

const TeamPage = () => {
    return(
        <React.Fragment>
            <MarginContainer/>
            <PageIntro title={'IMMOBILIEN SIND EINE HERZENSSACHE'}>
                <p>Wir enga­gieren uns aus Über­zeu­gung und von Herzen – um gemeinsam mit Ihnen glück­liche Geschichten zu schreiben. Lernen Sie uns kennen. Wir freuen uns, von Ihnen zu hören.</p>
            </PageIntro>
            <Section>
                <TextImageBox>
                    <h3>CRIS­TINA COTOIA</h3>
                    <p>Geschäfts­füh­rerin/Inha­berin</p>
                    <a href='mailto:cris­tina.coto­ia@no­bi­limmo.ch'>cris­tina.coto­ia@no­bi­limmo.ch</a>
                </TextImageBox>
                <TextImageBox>
                    <h3>CRIS­TINA COTOIA</h3>
                    <p>Geschäfts­füh­rerin/Inha­berin</p>
                    <a href='mailto:cris­tina.coto­ia@no­bi­limmo.ch'>cris­tina.coto­ia@no­bi­limmo.ch</a>
                </TextImageBox>
                <TextImageBox>
                    <h3>CRIS­TINA COTOIA</h3>
                    <p>Geschäfts­füh­rerin/Inha­berin</p>
                    <a href='mailto:cris­tina.coto­ia@no­bi­limmo.ch'>cris­tina.coto­ia@no­bi­limmo.ch</a>
                </TextImageBox>
                <TextImageBox>
                    <h3>CRIS­TINA COTOIA</h3>
                    <p>Geschäfts­füh­rerin/Inha­berin</p>
                    <a href='mailto:cris­tina.coto­ia@no­bi­limmo.ch'>cris­tina.coto­ia@no­bi­limmo.ch</a>
                </TextImageBox>
            </Section>
        </React.Fragment>
    )
}

export default TeamPage