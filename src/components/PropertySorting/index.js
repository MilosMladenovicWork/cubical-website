import React from 'react'

import styles from './property-sorting.module.scss'
import TiltableContainer from '../TiltableContainer'

const PropertySorting = () => {
  return(
    <form className={styles.sortingSettings}>
      <label>
      <TiltableContainer>
        <div className={styles.sortingDescription}>
          Sortieren nach:
        </div>
      </TiltableContainer>
      <TiltableContainer>
        <select name='preis'>
          <option value=''>Preis</option>
        </select>
      </TiltableContainer>
      <TiltableContainer>
        <select name='zimmer'>
          <option value=''>Zimmer</option>
        </select>
      </TiltableContainer>
      <TiltableContainer>
        <select name='wohnflache'>
          <option value=''>Wohnflache</option>
        </select>
      </TiltableContainer>
      </label>
    </form>
  )
}

export default PropertySorting