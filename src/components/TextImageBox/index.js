import React from 'react'

import styles from './text-image-box.module.scss'
import image from '../../img/text-image-box-image-1.png'
import TiltableContainer from '../../components/TiltableContainer'
import AppearOnViewContainer from '../AppearOnViewContainer'

const TextImageBox = ({children, reverse}) => {
    return(
        <article className={`${styles.textImageBox} ${reverse && styles.reverseDirection}`}>
            <AppearOnViewContainer>
                <TiltableContainer>
                    <img src={image} alt='' className={styles.image}/>
                </TiltableContainer>
            </AppearOnViewContainer>
            <AppearOnViewContainer>
                <div className={styles.content}>
                    {children}
                </div>
            </AppearOnViewContainer>
        </article>
    )
}

export default TextImageBox