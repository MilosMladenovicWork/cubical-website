import React from 'react'
import {Link} from 'gatsby'

import styles from './nav-link-vertical.module.scss'

const NavLinkVertical = ({link, children, onClick, active, invisible, showChildren}) => {
    return(
        <li className={`${styles.navLinkVertical} ${active && styles.active}`}>
            <div className={`${styles.navLinkVerticalChildren} ${showChildren && styles.showChildren}`}>
                {children}
            </div>
            <div onClick={onClick} className={styles.mainButton} style={{opacity: invisible && 0, width: invisible && 0}}>
                <Link to={link.href}>
                    {link.text}
                </Link>
            </div>
        </li>
    )
}

export default NavLinkVertical