import React from 'react'
import {Link} from 'gatsby'

import styles from './popular-section-item.module.scss'
import popularSectionImg from '../../img/popular-section1.png'
import RoofSVG from '../RoofSVG'

import forwardArrowImg from '../../img/arrow-forward.svg'

const PopularSectionItem = () => {
    return(
        <li className={styles.popularSectionItem}>
            <Link to='/dienstleistungen/verkaufen/'>
                <article>
                    <h5><RoofSVG/>IMMOBILIENVERKAUF</h5>
                    <img className={styles.representativeImg} src={popularSectionImg} alt=''/>
                    <h3>Step by Step erfolg­reich verkauft</h3>
                    <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
                    <img className={styles.openSectionIcon} src={forwardArrowImg} alt='see more'/>
                </article>
            </Link>
        </li>
    )
}

export default PopularSectionItem