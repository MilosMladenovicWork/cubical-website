import React from 'react'

import styles from './property-filter.module.scss'
import RoofSVG from '../RoofSVG'
import TiltableContainer from '../TiltableContainer'

const PropertyFilter = () => {
  return(
    <TiltableContainer>
      <form className={styles.propertyFilter}>
        <fieldset>
          <h5><RoofSVG/>Filterung</h5>
          <label>
            <input type="checkbox" name="filter" value="Bauland" />
            Bauland
          </label>
          <label>
            <input type="checkbox" name="filter" value="Wohnung" />
            Wohnung
          </label>
        </fieldset>
        <fieldset>
          <h5><RoofSVG/>Zimmer</h5>
          <select name='zimmer'>
            <option value=''>Alle</option>
          </select>
        </fieldset>
        <fieldset>
          <h5><RoofSVG/>Ort</h5>
          <select name='ort'>
            <option value=''>Alle</option>
          </select>
        </fieldset>
        <fieldset>
          <h5><RoofSVG/>Preis</h5>
          <div className={styles.rowSpacedBetween}>
            <label>
              From 
              <input type='text' name='priceFrom' className={styles.shortUnderlineInput}/>
            </label>
            <label>
              To
              <input type='text' name='priceTo' className={styles.shortUnderlineInput}/>
            </label>
          </div>
        </fieldset>
      </form>
    </TiltableContainer>
  )
}

export default PropertyFilter