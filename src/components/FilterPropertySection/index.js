import React, {useState, useEffect} from 'react'
import {animated, useTransition} from 'react-spring'

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

const dummyArray = [
    {
      id:'1',
      filterung: 'Bauland',
      zimmer: 1,
      ort: 'North Switzerland',
      preis: 100000,
      wohnflache: 100
    },
    {
      id:'2',
      filterung: 'Bauland',
      zimmer: 2,
      ort: 'South Switzerland',
      preis: 200000,
      wohnflache: 200
    },
    {
      id:'3',
      filterung: 'Wohnung',
      zimmer: 0.5,
      ort: 'North Switzerland',
      preis: 10000,
      wohnflache: 10
    },
    {
      id:'4',
      filterung: 'Wohnunh',
      zimmer: 0.5,
      ort: 'South Switzerland',
      preis: 1500000,
      wohnflache: 45
    },
]

const FilterPropertySection = ({kaufenProperties, mietenProperties}) => {
  
  const [numOfLoadedItems, setNumOfLoadedItems] = useState(1)
  const [scrollFromTop, setScrollFromTop] = useState(0)
  const [filters, setFilters] = useState({})
  const [sorting, setSorting] = useState({})
  const [filteredData, setFilteredData] = useState([])

  const transitions = useTransition(filteredData, item => item.id, {
    from: { maxHeight: '0vh', overflow:'hidden', opacity:0 },
    enter: { maxHeight: '250vh', overflow:'hidden', opacity:1 },
    leave: { maxHeight: '0vh', overflow:'hidden', opacity:0 },
    })

  console.log(sorting)

  const setScrollPosition = () => {
      setScrollFromTop(window.pageYOffset)
  }

  useEffect(() => {   
      window.scrollTo(0, scrollFromTop)
  }, [numOfLoadedItems])


  useEffect(() => {
    //filtering function
    
    //filterung filter
    let filteredArray = dummyArray.filter((property) => {
      if((filters.filterung && (filters.filterung.indexOf(property.filterung) != -1)) || (!filters.filterung || filters.filterung.length <= 0)){
        return true
      }
    })
    
    //zimmer filter
    filteredArray = filteredArray.filter(property => {
      if((property.zimmer && (filters.zimmer == property.zimmer)) || !filters.zimmer){
        return true
      }
    })

    //ort filter
    filteredArray = filteredArray.filter(property => {
      if((property.ort && (filters.ort == property.ort)) || !filters.ort){
        return true
      }
    })

    //price from filter
    filteredArray = filteredArray.filter(property => {
      if((property.preis && (filters.priceFrom <= property.preis)) || !filters.priceFrom){
        return true
      }
    })

    //price to filter
    filteredArray = filteredArray.filter(property => {
      if((property.preis && (filters.priceTo > property.preis)) || !filters.priceTo){
        return true
      }
    })

    //sorting functionality

    if(sorting.preis == 'ASC'){
      filteredArray = filteredArray.sort((propertyA, propertyB) => {
        return propertyA.preis - propertyB.preis
      })
    }
    if(sorting.preis == 'DESC'){
      filteredArray = filteredArray.sort((propertyA, propertyB) => {
        return propertyB.preis - propertyA.preis
      })
    }

    if(sorting.zimmer == 'ASC'){
      filteredArray = filteredArray.sort((propertyA, propertyB) => {
        return propertyA.zimmer - propertyB.zimmer
      })
    }
    if(sorting.zimmer == 'DESC'){
      filteredArray = filteredArray.sort((propertyA, propertyB) => {
        return propertyB.zimmer - propertyA.zimmer
      })
    }

    if(sorting.wohnflache == 'ASC'){
      filteredArray = filteredArray.sort((propertyA, propertyB) => {
        return propertyA.wohnflache - propertyB.wohnflache
      })
    }
    if(sorting.wohnflache == 'DESC'){
      filteredArray = filteredArray.sort((propertyA, propertyB) => {
        return propertyB.wohnflache - propertyA.wohnflache
      })
    }

    console.log(filteredArray)

    setFilteredData(filteredArray || dummyArray)
  }, [filters, sorting])

  return(
    <Section>
      <div className={styles.row}>
        <div className={styles.stickyFilterContainer}>
          <div className={styles.filterContainer}>
            <PropertyFilter data={dummyArray} filters={filters} setFilters={setFilters}/>
          </div>
        </div>
        <div className={styles.properties}>
          <div className={`${styles.infoAndSorting} ${styles.rowSpaced}`}>
            <h2>{filteredData.length} Immobilien gefunden</h2>
            <PropertySorting sorting={sorting} setSorting={setSorting}/>
          </div>
          {transitions.map(({item, props, key}, index) => {
                if(index < numOfLoadedItems){
                    return <animated.div style={props} key={key}>
                          <TextImageBox image={property}>
                          <h3>Some text about properties...</h3>
                          <BottomBorderedContainer>
                              <SpacedItemsContainer>
                                  <p>Filterung</p>
                                  <p>{item.filterung}</p>
                              </SpacedItemsContainer>
                          </BottomBorderedContainer>
                          <BottomBorderedContainer>
                              <SpacedItemsContainer>
                                  <p>Zimmer</p>
                                  <p>{item.zimmer}</p>
                              </SpacedItemsContainer>
                          </BottomBorderedContainer>
                          <BottomBorderedContainer>
                              <SpacedItemsContainer>
                                  <p>Ort</p>
                                  <p>{item.ort}</p>
                              </SpacedItemsContainer>
                          </BottomBorderedContainer>
                          <BottomBorderedContainer>
                              <SpacedItemsContainer>
                                  <p>Preis</p>
                                  <p>{item.preis}</p>
                              </SpacedItemsContainer>
                          </BottomBorderedContainer>
                      </TextImageBox> 
                    </animated.div>
                }
            })}
            {
          filteredData.length > numOfLoadedItems &&
          <div className={styles.seeMoreButton}>
              <ButtonBordered onClick={() => {setScrollPosition();setNumOfLoadedItems(prevState => prevState + 2)}}>
                  Mehr Anzeigen
              </ButtonBordered>
          </div>
            }
        </div>
      </div>
    </Section>
  )
}

export default FilterPropertySection