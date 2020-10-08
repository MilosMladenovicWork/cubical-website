import React from 'react'

import styles from './text-image-box.module.scss'
import image from '../../img/text-image-box-image-1.png'

const TextImageBox = ({children, reverse}) => {
    return(
        <article className={`${styles.textImageBox} ${reverse && styles.reverseDirection}`}>
            <img src={image} alt=''/>
            <div className={styles.content}>
                {children}
            </div>
        </article>
    )
}

export default TextImageBox