import React from 'react'

import styles from './page-regular-cards-section.module.scss'

import Section from '../../components/Section'
import ImageInfoItem from '../../components/ImageInfoItem'
import popularSectionImg from '../../img/popular-section1.png'

const PageRegularCardsSection = () => {
  return (
    <Section>
        <ul className={styles.popularSectionsContainer}>
            <ImageInfoItem link='/dienstleistungen/verkaufen/' image={popularSectionImg} title={'Step by Step erfolg­reich verkauft'} heading={'IMMOBILIENVERKAUF'}>
                <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
            </ImageInfoItem>
            <ImageInfoItem link='/dienstleistungen/verkaufen/' image={popularSectionImg} title={'Step by Step erfolg­reich verkauft'} heading={'IMMOBILIENVERKAUF'}>
                <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
            </ImageInfoItem>
            <ImageInfoItem link='/dienstleistungen/verkaufen/' image={popularSectionImg} title={'Step by Step erfolg­reich verkauft'} heading={'IMMOBILIENVERKAUF'}>
                <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
            </ImageInfoItem>
            <ImageInfoItem link='/dienstleistungen/verkaufen/' image={popularSectionImg} title={'Step by Step erfolg­reich verkauft'} heading={'IMMOBILIENVERKAUF'}>
                <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
            </ImageInfoItem>
            <ImageInfoItem link='/dienstleistungen/verkaufen/' image={popularSectionImg} title={'Step by Step erfolg­reich verkauft'} heading={'IMMOBILIENVERKAUF'}>
                <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
            </ImageInfoItem>
        </ul>
    </Section>
  )
}

export default PageRegularCardsSection