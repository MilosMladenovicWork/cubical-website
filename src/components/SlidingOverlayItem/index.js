import React from 'react'
import {Link} from 'gatsby'
import Image from 'gatsby-image'

import styles from './real-estate-item.module.scss'
import RoofSVG from '../RoofSVG'
import TiltableContainer from '../TiltableContainer'
import AppearOnViewContainer from '../AppearOnViewContainer'

const SlidingOverlayItem = ({children, text, image, heading, link, alt}) => {
    return(
        <li className={styles.slidingOverlayItem}>
            <AppearOnViewContainer>
                <Link to={link}>
                        <article>
                            {
                                heading &&
                                <h5><RoofSVG/>{heading}</h5>
                            }
                            <TiltableContainer>
                            <div className={styles.itemContent}>
                                {
                                    image &&
                                    <Image fluid={image} alt={alt} />
                                }
                                <div className={styles.text}>
                                    <h3>{text}</h3>
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