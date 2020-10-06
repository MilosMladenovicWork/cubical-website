import React from 'react'

import styles from './button-bordered.module.scss'

const ButtonBordered = ({children}) => {
    return(
        <button class={styles.buttonBordered}>
            {children}
        </button>
    )
}

export default ButtonBordered