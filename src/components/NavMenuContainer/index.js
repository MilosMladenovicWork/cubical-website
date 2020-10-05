import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import styles from './nav-menu-container.module.scss'

const NavMenuContainer = ({children}) => {
    
    const dispatch = useDispatch()

    if(typeof window != 'undefined'){
        window.addEventListener('scroll', () =>{
            dispatch({type:'SCROLL_FROM_TOP_CHANGE', payload:window.pageYOffset})
        })
    }    
    
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
        <nav className={styles.primaryMenu} style={{
            backgroundColor:`rgba(255, 255, 255, ${backgroundHandler()})`
        }}>
            {children}
        </nav>
    )
}

export default NavMenuContainer