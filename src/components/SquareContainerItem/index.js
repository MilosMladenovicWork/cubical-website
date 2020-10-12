import React from 'react'
import AppearOnViewContainer from '../AppearOnViewContainer'

import TiltableContainer from '../TiltableContainer'
import styles from './square-container-item.module.scss'

const SquareContainerItem = ({children}) => {
    return(
        <li className={styles.squareContainerItem}>
            <AppearOnViewContainer>
                <TiltableContainer>
                    {children}
                </TiltableContainer>
            </AppearOnViewContainer>
        </li>
    )
}

export default SquareContainerItem