import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'

import styles from './mobile-menu-link.module.scss'
import RoofSVG from '../RoofSVG'

const MobileMenuLink = ({link, subLinks, deactivated, onClick, button}) => {

    const [clickedOnce, setClickedOnce] = useState(false)

    useEffect(() => {
        if(!subLinks){
            setClickedOnce(true)
        }
    }, [])

    return(
        <li className={styles.navLink}>
            <Link onClick={(e) => {!clickedOnce && setClickedOnce(true);(deactivated || !clickedOnce) && e.preventDefault() ; !deactivated && clickedOnce && onClick(); setClickedOnce(true); button && onClick()}} to={link.href} activeClassName={styles.active} partiallyActive={true} activeClassName={styles.active} partiallyActive={true}>
                <RoofSVG/>
                {link.text}
            </Link>
            {
                subLinks && 
                <ul className={`${styles.subLinks} ${clickedOnce && styles.visible}`} activeClassName={styles.active} partiallyActive={true}>
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