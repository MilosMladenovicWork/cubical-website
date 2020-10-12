import React from 'react'
import {Link} from 'gatsby'

import styles from './real-estate-item.module.scss'
import RoofSVG from '../RoofSVG'
import TiltableContainer from '../TiltableContainer'
import AppearOnViewContainer from '../AppearOnViewContainer'

const SlidingOverlayItem = ({children, title, image, heading, link}) => {
    return(
        <li className={styles.slidingOverlayItem}>
            <AppearOnViewContainer>
                <Link to={link}>
                        <article>
                            <h5><RoofSVG/>{heading}</h5>
                            <TiltableContainer>
                            <div className={styles.itemContent}>
                                <img src={image} alt='' />
                                <div className={styles.text}>
                                    <h3>{title}</h3>
                                    {children}
                                </div>
                            </div>
                            </TiltableContainer>
                        </article>
                </Link>
            </AppearOnViewContainer>
        </li>
    )
}

export default SlidingOverlayItem