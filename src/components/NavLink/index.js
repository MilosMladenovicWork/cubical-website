import React from 'react'
import {Link} from 'gatsby'
import {useSelector} from 'react-redux'

import styles from './nav-link.module.scss'
import RoofSVG from '../RoofSVG'

const NavLink = ({link, subLinks, deactivated, onClick}) => {
    
    let pageOffset = useSelector(state => state.scrollFromTop)


    let backgroundHandler = () =>{
        if(pageOffset < 5){
            return 0
        }else if(pageOffset > 95){
            return 1
        }else{
            return pageOffset / 100
        }
    }

    return(
        <li className={styles.navLink} onClick={() => onClick && onClick()}>
            <Link onClick={(e) => deactivated && e.preventDefault()} to={link.href} activeClassName={styles.active} partiallyActive={true}>
                  
                <span>
                    {link.text}
                </span>
            </Link>
            {
                subLinks && 
                subLinks.length > 0 &&
                <ul className={styles.subLinks}>
                    {
                        subLinks.map(link => {
                            return <li className={styles.subLinksLink}>
                                <Link to={link.href} activeClassName={styles.active} partiallyActive={true}>
                                    
                                    <span>
                                        {link.text}
                                    </span>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            }
        </li>
    )
}

export default NavLink