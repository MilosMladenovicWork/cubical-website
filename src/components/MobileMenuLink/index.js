import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'

import styles from './mobile-menu-link.module.scss'
import RoofSVG from '../RoofSVG'
import caretUp from '../../img/caret-up-outline.svg'
import caretDown from '../../img/caret-down-outline.svg'

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
                    
                    {link.text}
                </div>
                {
                    subLinks &&
                    subLinks.length > 0 &&
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
                            <img src={caretUp} alt="" />
                            :
                            <img src={caretDown} alt="" />
                        }
                    </div>
                }
            </Link>
            {
                subLinks && 
                <ul className={`${styles.subLinks} ${showSubLinks && styles.visible}`} activeClassName={styles.active} partiallyActive={true}>
                    {
                        subLinks.map(link => {
                            return <li onClick={() => onClick()}>
                                <Link to={link.href} activeClassName={styles.active} partiallyActive={true}>
                                    <div className={styles.sublinkContent}>
                                        {link.text}
                                    </div>
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