import React from 'react'

import styles from './button-bordered.module.scss'

const ButtonBordered = ({children, onClick}) => {
    return(
        <button class={styles.buttonBordered} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonBordered