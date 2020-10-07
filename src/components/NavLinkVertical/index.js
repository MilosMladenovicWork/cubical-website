import React from 'react'
import {Link} from 'gatsby'

import styles from './nav-link-vertical.module.scss'

const NavLinkVertical = ({link, children, onClick, active}) => {
    return(
        <li className={`${styles.navLinkVertical} ${active && styles.active}`}>
            <div className={styles.navLinkVerticalChildren}>
                {children}
            </div>
            <div onClick={onClick} className={styles.mainButton}>
                <Link to={link.href}>
                    {link.text}
                </Link>
            </div>
        </li>
    )
}

export default NavLinkVertical