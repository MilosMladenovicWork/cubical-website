import React from 'react'

import styles from './aside-nav-container.module.scss'

const AsideNavContainer = ({children, rotated, className}) => {
    return(
        <aside className={`${styles.asideNavContainer} ${className}`}>
            <nav>
                <ul className={rotated && styles.rotated}>
                    {children}
                </ul>
            </nav>
        </aside>
    )
}

export default AsideNavContainer