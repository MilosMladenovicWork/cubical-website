import React from 'react'

import styles from './property-filter.module.scss'
import RoofSVG from '../RoofSVG'
import TiltableContainer from '../TiltableContainer'

const PropertyFilter = ({filters, setFilters}) => {
  
  const setArrayValues = (e) => {
    const targetName = e.target.name
    const targetValue = e.target.value
    
    if(!filters[targetName]){
      setFilters(prevState => ({
        ...prevState,
        [targetName]:[targetValue]
      }))
    }else{
      if(filters[targetName].findIndex(value => value == targetValue) == -1){
        setFilters(prevState => ({
          ...prevState,
          [targetName]: [...prevState[targetName],targetValue]
        }))
      }else{
        setFilters(prevState => {
          let valueArrayCopy = [...prevState[targetName]];
          return {
            ...prevState,
            [targetName]: [...valueArrayCopy.filter(value => value != targetValue)]
          }
        }
        )
      }
    }
  }

  const setStringValues = (e) => {
    const targetName = e.target.name
    const targetValue = e.target.value

    if(!filters[targetName]){
      setFilters(prevState => ({
        ...prevState,
        [targetName]:targetValue
      }))
    }else{
      setFilters(prevState => ({...prevState,[targetName]: targetValue}))
    }
  }

  return(
    <TiltableContainer>
      <form className={styles.propertyFilter}>
        <fieldset>
          <h5><RoofSVG/>Filterung</h5>
          <label>
            <input
            onChange={setArrayValues}
            type="checkbox" name="filter" value="Bauland" />
            Bauland
          </label>
          <label>
            <input onChange={setArrayValues} type="checkbox" name="filter" value="Wohnung" />
            Wohnung
          </label>
        </fieldset>
        <fieldset>
          <h5><RoofSVG/>Zimmer</h5>
          <select onChange={setStringValues} name='zimmer'>
            <option value=''>Alle</option>
          </select>
        </fieldset>
        <fieldset>
          <h5><RoofSVG/>Ort</h5>
          <select onChange={setStringValues} name='ort'>
            <option value=''>Alle</option>
          </select>
        </fieldset>
        <fieldset>
          <h5><RoofSVG/>Preis</h5>
          <div className={styles.rowSpacedBetween}>
            <label>
              From 
              <input onChange={setStringValues} type='text' name='priceFrom' className={styles.shortUnderlineInput}/>
            </label>
            <label>
              To
              <input onChange={setStringValues} type='text' name='priceTo' className={styles.shortUnderlineInput}/>
            </label>
          </div>
        </fieldset>
      </form>
    </TiltableContainer>
  )
}

export default PropertyFilter