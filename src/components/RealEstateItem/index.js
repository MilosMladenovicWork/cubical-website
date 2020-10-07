import React from 'react'
import {Link} from 'gatsby'

import styles from './real-estate-item.module.scss'
import RoofSVG from '../RoofSVG'
import itemImage from '../../img/itemImage1.png'

const RealEstateItem = () => {
    return(
        <li className={styles.realEstateItem}>
            <Link to='/'>
                <article>
                    <h5><RoofSVG/>5316 Leuggern</h5>
                    <div className={styles.itemContent}>
                        <img src={itemImage} alt='' />
                        <div className={styles.text}>
                            <h3>Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen</h3>
                            <span>4,5 Zimmer</span>
                            <span>CHF 500'000</span>
                            <span>5316 Leuggern</span>
                        </div>
                    </div>
                </article>
            </Link>
        </li>
    )
}

export default RealEstateItem