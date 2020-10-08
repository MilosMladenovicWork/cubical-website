import React from 'react'

import styles from './offset-item-container.module.scss'

const OffsetItemContainer = ({children}) => {
    return(
        <ul className={styles.offsetItemContainer}>
            {children}
        </ul>
    )
}

export default OffsetItemContainer