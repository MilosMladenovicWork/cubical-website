import React from 'react'

import TiltableContainer from '../TiltableContainer'
import styles from './square-container-item.module.scss'

const SquareContainerItem = ({children}) => {
    return(
        <li className={styles.squareContainerItem}>
            <TiltableContainer>
                {children}
            </TiltableContainer>
        </li>
    )
}

export default SquareContainerItem