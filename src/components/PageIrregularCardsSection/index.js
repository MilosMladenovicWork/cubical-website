import React from 'react'

import styles from './page-irregular-cards-section.module.scss'
import background4 from '../../img/dienstleistungen.png'
import BigImageSection from '../../components/BigImageSection'
import RandomWidthItem from '../../components/RandomWidthItem'

const PageIrregularCardsSection = () => {
  return(
    <BigImageSection image={background4}>
        <h2>DIENSTLEISTUNGEN</h2>
        <ul className={styles.ourServicesContainer}>
            <RandomWidthItem link='/dienstleistungen/verkaufen/'>
                <h3>Verkauf von Immobilien</h3>
                <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
            </RandomWidthItem>
            <RandomWidthItem link='/dienstleistungen/verkaufen/'>
                <h3>Verkauf von Immobilien</h3>
                <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
            </RandomWidthItem>
            <RandomWidthItem link='/dienstleistungen/verkaufen/'>
                <h3>Verkauf von Immobilien</h3>
                <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
            </RandomWidthItem>
            <RandomWidthItem link='/dienstleistungen/verkaufen/'>
                <h3>Verkauf von Immobilien</h3>
                <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
            </RandomWidthItem>
            <RandomWidthItem link='/dienstleistungen/verkaufen/'>
                <h3>Verkauf von Immobilien</h3>
                <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
            </RandomWidthItem>
        </ul>
    </BigImageSection>
  )
}

export default PageIrregularCardsSection