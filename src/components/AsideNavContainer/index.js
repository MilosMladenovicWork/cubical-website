import React from 'react'

import styles from './aside-nav-container.module.scss'

const AsideNavContainer = ({children}) => {
    return(
        <aside className={styles.asideNavContainer}>
            <nav>
                <ul>
                    {children}
                </ul>
            </nav>
        </aside>
    )
}

export default AsideNavContainer