import React from 'react'

import styles from './page-map-section.module.scss'
import Map from '../../components/Map'
import AppearOnViewContainer from '../../components/AppearOnViewContainer'

const PageMapSection = () => {
  return(
    <section>
        <AppearOnViewContainer>
            <div className={styles.mapContainer}>
                <Map coords={[46.195602, 6.148113]} zoom={15}/>
            </div>
        </AppearOnViewContainer>
    </section>
  )
}

export default PageMapSection