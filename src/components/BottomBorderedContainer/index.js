import React from 'react'

import styles from './bottom-bordered-container.module.scss'

const BottomBorderedContainer = ({children}) => {
    return(
        <div className={styles.bottomBorderedContainer}>
            {children}
        </div>
    )
}

export default BottomBorderedContainer