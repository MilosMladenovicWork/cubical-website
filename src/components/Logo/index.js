import React, {useRef} from 'react'
import {Link} from 'gatsby'
import {useSpring, animated, useChain} from 'react-spring'
import {useSelector} from 'react-redux'

import styles from './logo.module.scss'
import logo from '../../img/logo.png'
import logoMoto from '../../img/logo-moto.png'


const Logo = () => {

    const pageLoaded = useSelector(state => state.pageLoaded)
    const pageLoadedMinimal = useSelector(state => state.pageLoadedMinimal)

    const motoRef = useRef()
    const motoProps = useSpring({
        from:{
            opacity: 0,
            transform:'scale(0.5)'
        },
        to:{
            opacity: (pageLoaded && pageLoadedMinimal) ? 0 : 1,
            transform: (pageLoaded && pageLoadedMinimal) ? 'scale(1)' : 'scale(1.75)' 
        },
        delay:(pageLoaded && pageLoadedMinimal) ? 0 : 500,
        ref: motoRef
    })

    const logoRef = useRef()
    const logoProps = useSpring({
        from:{
            transform:'scale(0.5)'
        },
        to:{
            transform: (pageLoaded && pageLoadedMinimal) ? 'scale(1)' : 'scale(1.75)'
        },
        delay: (pageLoaded && pageLoadedMinimal) ? 0 : 300,
        ref: logoRef
    })

    useChain([logoRef, motoRef])

    return(
        <div class0Name={styles.logo}>
            <Link to={'/'}>
                <animated.img style={logoProps} src={logo} alt='cubical.ag - the keys to your home'/>
                <animated.img style={motoProps} src={logoMoto} alt='' className={styles.logoMoto}/>
            </Link>
        </div>
    )
}

export default Logo