import React from 'react'
import {Link} from 'gatsby'

import styles from './item-appear-overlay.module.scss'
import TiltableContainer from '../TiltableContainer'
import AppearOnViewContainer from '../AppearOnViewContainer'

const ItemAppearOverlay = () => {
    return(
        <AppearOnViewContainer>
        <li className={styles.itemAppearOverlay}>
                <TiltableContainer>
                    <article>
                        <div className={styles.mainContent}>
                            <h3>
                                Check­liste Gewerbe-objekt Vermieten
                            </h3>
                        </div>
                        <div className={styles.overlayContent}>
                            <Link to='/'>
                                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Eye</title><path d='M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z' fill='none' stroke='#ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><circle cx='256' cy='256' r='80' fill='none' stroke='#ffffff' stroke-miterlimit='10' stroke-width='32'/></svg>
                            </Link>
                            <Link to='/'>
                                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Cloud Download</title><path d='M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03' fill='none' stroke='#ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
                            </Link>
                        </div>
                    </article>
                </TiltableContainer>
        </li>
            </AppearOnViewContainer>
    )
}

export default ItemAppearOverlay