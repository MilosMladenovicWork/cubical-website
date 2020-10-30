import React from 'react'

import styles from './spaced-items-container.module.scss'

const SpacedItemsContainer = ({children}) => {
    return(
        <div className={styles.spacedItemsContainer}>
            {children}
        </div>
    )
}

export default SpacedItemsContainer