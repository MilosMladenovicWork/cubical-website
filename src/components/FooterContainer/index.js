import React from 'react'

import styles from './footer-container.module.scss'

const FooterContainer = ({children}) => {
    return(
        <footer className={styles.footer}>
            {children}
        </footer>
    )
}

export default FooterContainer