import React from 'react'
import {Link} from 'gatsby'

import styles from './real-estate-item.module.scss'
import RoofSVG from '../RoofSVG'
import itemImage from '../../img/itemImage1.png'
import TiltableContainer from '../TiltableContainer'

const RealEstateItem = ({children}) => {
    return(
        <li className={styles.realEstateItem}>
            <Link to='/immobilien-entry'>
                    <article>
                        <h5><RoofSVG/>5316 Leuggern</h5>
                        <TiltableContainer>
                        <div className={styles.itemContent}>
                            <img src={itemImage} alt='' />
                            <div className={styles.text}>
                                <h3>Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen</h3>
                                {children}
                            </div>
                        </div>
                        </TiltableContainer>
                    </article>
            </Link>
        </li>
    )
}

export default RealEstateItem