import React from 'react'
import {Link} from 'gatsby'
import {useSelector} from 'react-redux'

import styles from './nav-link.module.scss'
import RoofSVG from '../RoofSVG'

const NavLink = ({link, subLinks}) => {
    
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
        <li className={styles.navLink}>
            <RoofSVG/>
            <Link to={link.href}>
                {link.text}
            </Link>
            <ul className={styles.subLinks} style={{
            backgroundColor:`rgba(255, 255, 255, ${backgroundHandler()})`
        }}>
                {
                    subLinks && subLinks.map(link => {
                        return <li>
                            <RoofSVG/>
                            <Link to={link.href}>
                                {link.text}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </li>
    )
}

export default NavLink