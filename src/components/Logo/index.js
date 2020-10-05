import React from 'react'
import {Link} from 'gatsby'

import styles from './logo.module.scss'
import logo from '../../img/logo.png'

const Logo = () => {
    return(
        <div className={styles.logo}>
            <Link to={'/'}>
                <img src={logo} alt='cubical.ag - the keys to your home'/>
            </Link>
        </div>
    )
}

export default Logo