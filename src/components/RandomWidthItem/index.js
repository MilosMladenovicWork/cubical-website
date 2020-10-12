import React from 'react'
import {Link} from 'gatsby'

import styles from './our-services-item.module.scss'
import arrowRightImg from '../../img/arrow-forward.svg'
import AppearOnViewContainer from '../AppearOnViewContainer'

const OurServicesItem = ({children, link}) => {
    return(
        <li style={{
            width: `${Math.floor(Math.random()*(45-30+1)+30)}%`
        }}>
            <AppearOnViewContainer>
                <div className={styles.randomWidthItem}>
                        <Link to={link}>
                            {children}
                            <img src={arrowRightImg} className={styles.openServiceIcon} alt='see more'/>
                        </Link>
                </div>
            </AppearOnViewContainer>
        </li>
    )
}

export default OurServicesItem