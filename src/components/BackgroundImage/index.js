import React from 'react'

import styles from './background-image.module.scss'

const BackgroundImage = ({image}) => {
    return(
        <img className={styles.backgroundImage} src={image} alt=''/>
    )
}

export default BackgroundImage