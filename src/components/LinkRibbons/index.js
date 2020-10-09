import React from 'react'
import {Link} from 'gatsby'

import styles from './link-ribbons.module.scss'
import TiltableContainer from '../TiltableContainer'

const LinkRibbons = ({links}) => {
    return(
        <ul className={styles.linkRibbonContainer}>
            {links.map((link, index) => {
                return <li key={index}>
                        <TiltableContainer>
                            <div className={styles.linkStyledContainer}>
                                <Link to={link.href}>
                                    {link.text}
                                </Link>
                            </div>
                        </TiltableContainer>
                    </li>
            })}
        </ul>
    )
}

export default LinkRibbons