import React from 'react'

import styles from './property-sorting.module.scss'
import TiltableContainer from '../TiltableContainer'

const PropertySorting = ({sorting, setSorting}) => {

  const setStringValues = (e) => {
    const targetName = e.target.name
    const targetValue = e.target.value

    if(!filters[targetName]){
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
      <TiltableContainer>
        <div className={styles.sortingDescription}>
          Sortieren nach:
        </div>
      </TiltableContainer>
      <TiltableContainer>
        <select name='preis' onChange={setStringValues}>
          <option value=''>Preis</option>
        </select>
      </TiltableContainer>
      <TiltableContainer>
        <select name='zimmer' onChange={setStringValues}>
          <option value=''>Zimmer</option>
        </select>
      </TiltableContainer>
      <TiltableContainer>
        <select name='wohnflache' onChange={setStringValues}>
          <option value=''>Wohnflache</option>
        </select>
      </TiltableContainer>
      </label>
    </form>
  )
}

export default PropertySorting