import React, {useState, useEffect} from 'react'
import PropertyFilter from '../PropertyFilter'
import Section from '../Section'
import TextImageBox from '../TextImageBox'
import BottomBorderedContainer from '../BottomBorderedContainer'
import SpacedItemsContainer from '../SpacedItemsContainer'
import property from '../../img/property.png'
import ButtonBordered from '../ButtonBordered'

import styles from './filter-property-section.module.scss'
import TiltableContainer from '../TiltableContainer'
import PropertySorting from '../PropertySorting'

const FilterPropertySection = ({kaufenProperties, mietenProperties}) => {

  const [numOfLoadedItems, setNumOfLoadedItems] = useState(1)
  const [scrollFromTop, setScrollFromTop] = useState(0)
  const [filters, setFilters] = useState({})
  const [sorting, setSorting] = useState({})

  console.log(sorting)

  const setScrollPosition = () => {
      setScrollFromTop(window.pageYOffset)
  }

  useEffect(() => {   
      window.scrollTo(0, scrollFromTop)
  }, [numOfLoadedItems])

  const dummyArray = [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
  ]

  return(
    <Section>
      <div className={styles.row}>
        <div className={styles.stickyFilterContainer}>
          <div className={styles.filterContainer}>
            <PropertyFilter filters={filters} setFilters={setFilters}/>
          </div>
        </div>
        <div className={styles.properties}>
          <div className={`${styles.infoAndSorting} ${styles.rowSpaced}`}>
            <h2>{dummyArray.length} Immobilien gefunden</h2>
            <PropertySorting sorting={sorting} setSorting={setSorting}/>
          </div>
          {dummyArray.map((item, index) => {
                if(index < numOfLoadedItems){
                    return <TextImageBox image={property}>
                    <h3>Some text about properties...</h3>
                    <BottomBorderedContainer>
                        <SpacedItemsContainer>
                            <p>Adresse</p>
                            <p>8200 Schaffhausen</p>
                        </SpacedItemsContainer>
                    </BottomBorderedContainer>
                    <BottomBorderedContainer>
                        <SpacedItemsContainer>
                            <p>Adresse</p>
                            <p>8200 Schaffhausen</p>
                        </SpacedItemsContainer>
                    </BottomBorderedContainer>
                    <BottomBorderedContainer>
                        <SpacedItemsContainer>
                            <p>Adresse</p>
                            <p>8200 Schaffhausen</p>
                        </SpacedItemsContainer>
                    </BottomBorderedContainer>
                </TextImageBox> 
                }
            })}
          <div className={styles.seeMoreButton}>
              <ButtonBordered onClick={() => {setScrollPosition();setNumOfLoadedItems(prevState => prevState + 2)}}>
                  Mehr Anzeigen
              </ButtonBordered>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FilterPropertySection