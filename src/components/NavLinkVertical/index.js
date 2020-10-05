import React from 'react'
import {Link} from 'gatsby'

import styles from './nav-link-vertical.module.scss'

const NavLinkVertical = ({link, children}) => {
    return(
        <li className={styles.navLinkVertical}>
            <div className={styles.navLinkVerticalChildren}>
                {children}
            </div>
            <Link to={link.href}>
                {link.text}
            </Link>
        </li>
    )
}

export default NavLinkVertical