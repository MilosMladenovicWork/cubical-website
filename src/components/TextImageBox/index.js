import React from 'react'

import styles from './text-image-box.module.scss'
import image from '../../img/text-image-box-image-1.png'
import TiltableContainer from '../../components/TiltableContainer'

const TextImageBox = ({children, reverse}) => {
    return(
        <article className={`${styles.textImageBox} ${reverse && styles.reverseDirection}`}>
            <TiltableContainer>
                <img src={image} alt='' className={styles.image}/>
            </TiltableContainer>
            <div className={styles.content}>
                {children}
            </div>
        </article>
    )
}

export default TextImageBox