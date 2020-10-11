import React, {useState} from 'react'

import styles from './see-more-container.module.scss'
import addMoreImg from '../../img/add-circle.svg'

const SeeMoreContainer = ({children}) => {

    const [seeMore, setSeeMore] = useState(false)

    return(
        <React.Fragment>
            <div className={`${styles.seeMoreContainer} ${seeMore && styles.extended}`}>
                {children}
            </div>
            <button className={`${styles.addMoreButton} ${seeMore && styles.notVisible}`} onClick={() => setSeeMore(true)}>
                <img src={addMoreImg} alt=''/>
                <p>Mehr erfahren</p>
            </button>
        </React.Fragment>
    )
}

export default SeeMoreContainer