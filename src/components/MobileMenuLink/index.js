import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'

import styles from './mobile-menu-link.module.scss'
import RoofSVG from '../RoofSVG'

const MobileMenuLink = ({link, subLinks, deactivated, onClick}) => {

    const [clickedOnce, setClickedOnce] = useState(false)

    useEffect(() => {
        if(!subLinks){
            setClickedOnce(true)
        }
    }, [])

    return(
        <li className={styles.navLink}>
            <Link onClick={(e) => {(deactivated || !clickedOnce) && e.preventDefault() ; clickedOnce && onClick(); setClickedOnce(true)}} to={link.href} activeClassName={styles.active} partiallyActive={true}>
                <RoofSVG/>
                {link.text}
            </Link>
            {
                subLinks && 
                <ul className={`${styles.subLinks} ${clickedOnce && styles.visible}`}>
                    {
                        subLinks.map(link => {
                            return <li onClick={() => oncClick()}>
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