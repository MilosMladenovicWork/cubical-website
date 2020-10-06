import React from 'react'
import {Link} from 'gatsby'

import styles from './our-services-item.module.scss'
import arrowRightImg from '../../img/arrow-forward.svg'

const OurServicesItem = () => {
    return(
        <li className={styles.ourServicesItem} style={{
            width: `${Math.floor(Math.random()*(45-30+1)+30)}%`
        }}>
            <Link to='#'>
                <h3>Verkauf von Immobilien</h3>
                <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
                <img src={arrowRightImg} className={styles.openServiceIcon} alt='see more'/>
            </Link>
        </li>
    )
}

export default OurServicesItem