import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'

import styles from './mobile-menu-link.module.scss'
import RoofSVG from '../RoofSVG'

const MobileMenuLink = ({link, subLinks, deactivated, onClick, button}) => {

    const [showSubLinks, setShowSubLinks] = useState(false)

    return(
        <li className={styles.navLink}>
            <Link 
            className={styles.primaryLink}
            onClick={(e) => {
                (deactivated || button) && e.preventDefault();
                !deactivated && !button && onClick(); 
                button && onClick();
            }} 
            to={link.href} 
            activeClassName={styles.active} 
            partiallyActive={true}
            >
                <div className={styles.primaryLinkContent}>
                    <RoofSVG/>
                    {link.text}
                </div>
                <div 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowSubLinks((prevState) => !prevState)
                }} 
                className={styles.showMoreButton}
                >
                    {
                        showSubLinks ?
                        '⯅'
                        :
                        '⯆'
                    }
                </div>
            </Link>
            {
                subLinks && 
                <ul className={`${styles.subLinks} ${showSubLinks && styles.visible}`} activeClassName={styles.active} partiallyActive={true}>
                    {
                        subLinks.map(link => {
                            return <li onClick={() => onClick()}>
                                <Link to={link.href} activeClassName={styles.active} partiallyActive={true}>
                                    <RoofSVG/>
                                    {link.text}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            }
        </li>
    )
}

export default MobileMenuLink