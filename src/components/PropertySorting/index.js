import React from 'react'

import styles from './property-sorting.module.scss'
import TiltableContainer from '../TiltableContainer'

const PropertySorting = ({sorting, setSorting}) => {

  const setStringValues = (e) => {
    const targetName = e.target.name
    const targetValue = e.target.value

    setSorting([])
    if(!sorting[targetName]){
      setSorting(prevState => ({
        ...prevState,
        [targetName]:targetValue
      }))
    }else{
      setSorting(prevState => ({...prevState,[targetName]: targetValue}))
    }
  }

  return(
    <form className={styles.sortingSettings}>
      <label>
      <TiltableContainer className={styles.sortingTiltableContainer}>
        <div className={styles.sortingDescription}>
          Sortieren nach:
        </div>
      </TiltableContainer>
      <TiltableContainer className={styles.sortingTiltableContainer}>
        <div className={styles.selectContainer}>
          <select name='preis' onChange={setStringValues} value={sorting.preis || ''}>
            <option value=''>Preis</option>
            <option value='ASC'>ASC</option>
            <option value='DESC'>DESC</option>
          </select>
        </div>
      </TiltableContainer>
      <TiltableContainer className={styles.sortingTiltableContainer}>
        <div className={styles.selectContainer}>
          <select name='zimmer' onChange={setStringValues} value={sorting.zimmer || ''}>
            <option value=''>Zimmer</option>
            <option value='ASC'>ASC</option>
            <option value='DESC'>DESC</option>
          </select>
        </div>
      </TiltableContainer>
      <TiltableContainer className={styles.sortingTiltableContainer}>
        <div className={styles.selectContainer}>
          <select name='wohnflache' onChange={setStringValues} value={sorting.wohnflache || ''}>
            <option value=''>Wohnflache</option>
            <option value='ASC'>ASC</option>
            <option value='DESC'>DESC</option>
          </select>
        </div>
      </TiltableContainer>
      </label>
    </form>
  )
}

export default PropertySorting