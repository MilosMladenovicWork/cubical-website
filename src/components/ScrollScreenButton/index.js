import React from 'react'

import styles from './scroll-screen-button.module.scss'

const ScrollScreenButton = ({children}) => {

    const scrollPage = () => {
        window.scroll({top:Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0), behavior: 'smooth'})
    }

    return(
        <button className={styles.scrollScreenButton} onClick={() => scrollPage()}>
            {children}
        </button>
    )
}

export default ScrollScreenButton