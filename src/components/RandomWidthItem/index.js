import React from 'react'
import {Link} from 'gatsby'

import styles from './our-services-item.module.scss'
import arrowRightImg from '../../img/arrow-forward.svg'

const OurServicesItem = ({children, link}) => {
    return(
        <li className={styles.randomWidthItem} style={{
            width: `${Math.floor(Math.random()*(45-30+1)+30)}%`
        }}>
            <Link to={link}>
                {children}
                <img src={arrowRightImg} className={styles.openServiceIcon} alt='see more'/>
            </Link>
        </li>
    )
}

export default OurServicesItem