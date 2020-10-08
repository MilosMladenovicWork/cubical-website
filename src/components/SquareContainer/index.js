import React from 'react'

import styles from './square-container.module.scss'

const SquareContainer = ({children, lessChildren}) => {
    return(
        <ul className={`${styles.squareContainer} ${lessChildren && styles.lessChildren}`}>
            {children}
        </ul>
    )
}

export default SquareContainer