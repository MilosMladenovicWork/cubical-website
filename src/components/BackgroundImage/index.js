import React from 'react'

import styles from './background-image.module.scss'

const BackgroundImage = ({image}) => {
    return(
        <div className={styles.backgroundImage}>
            <img src={image} alt=''/>
        </div>
    )
}

export default BackgroundImage