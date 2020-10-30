import React from 'react'

import styles from './text-image-box.module.scss'
import TiltableContainer from '../../components/TiltableContainer'
import AppearOnViewContainer from '../AppearOnViewContainer'

const TextImageBox = ({children, reverse, image}) => {
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