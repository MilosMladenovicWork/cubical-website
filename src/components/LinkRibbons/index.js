import React from 'react'
import {Link} from 'gatsby'

import styles from './link-ribbons.module.scss'

const LinkRibbons = ({links}) => {
    return(
        <ul className={styles.linkRibbonContainer}>
            {links.map((link, index) => {
                return <li key={index}>
                        <Link to={link.href}>
                            {link.text}
                        </Link>
                    </li>
            })}
        </ul>
    )
}

export default LinkRibbons