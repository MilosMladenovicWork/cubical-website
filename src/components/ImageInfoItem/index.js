import React from 'react'
import {Link} from 'gatsby'

import styles from './popular-section-item.module.scss'
import popularSectionImg from '../../img/popular-section1.png'
import RoofSVG from '../RoofSVG'

import forwardArrowImg from '../../img/arrow-forward.svg'
import TiltableContainer from '../TiltableContainer'

const ImageInfoItem = ({heading, title, image, children, link}) => {
    return(
        <li className={styles.imageInfoItem}>
            <TiltableContainer>
                <Link to={link}>
                    <article>
                        <h5><RoofSVG/>{heading}</h5>
                        <img className={styles.representativeImg} src={image} alt=''/>
                        <div className={styles.textContent}>
                            <h3>{title}</h3>
                            {children}
                            <img className={styles.openSectionIcon} src={forwardArrowImg} alt='see more'/>
                        </div>
                    </article>
                </Link>
            </TiltableContainer>
        </li>
    )
}

export default ImageInfoItem