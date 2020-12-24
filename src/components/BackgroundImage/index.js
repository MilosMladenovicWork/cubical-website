import React from 'react'
import Image from 'gatsby-image'

import styles from './background-image.module.scss'

const BackgroundImage = ({image}) => {
    return(
        <div className={styles.backgroundImage}>
            <Image fluid={image} alt={''} />
        </div>
    )
}

export default BackgroundImage