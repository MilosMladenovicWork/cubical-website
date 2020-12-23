import React from 'react'

import styles from './aside-nav-container.module.scss'

const AsideNavContainer = ({children, rotated}) => {
    return(
        <aside className={styles.asideNavContainer}>
            <nav>
                <ul className={rotated && styles.rotated}>
                    {children}
                </ul>
            </nav>
        </aside>
    )
}

export default AsideNavContainer