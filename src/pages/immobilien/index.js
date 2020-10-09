import React, {useEffect, useState} from 'react'

import OffsetItemContainer from '../../components/OffsetItemContainer'
import RealEstateItem from '../../components/RealEstateItem'
import Section from '../../components/Section'
import MarginContainer from '../../components/MarginContainer'
import ButtonBordered from '../../components/ButtonBordered'
import styles from './immobilien.module.scss'

const ImmobilienPage = () => {

    const [numOfLoadedItems, setNumOfLoadedItems] = useState(5)
    const [scrollFromTop, setScrollFromTop] = useState(0)

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

    const setScrollPosition = () => {
        setScrollFromTop(window.pageYOffset)
    }

    useEffect(() => {   
        window.scrollTo(0, scrollFromTop)
    }, [numOfLoadedItems])

    return(
        <React.Fragment>
            <MarginContainer/>
            <Section>
                <h1>FREIE OBJEKTE</h1>
                <OffsetItemContainer>
                    {dummyArray.map((item, index) => {
                        if(index < numOfLoadedItems){
                            return <RealEstateItem/>
                        }
                    })}
                </OffsetItemContainer>
                <div className={styles.seeMoreButton}>
                    <ButtonBordered onClick={() => {setScrollPosition();setNumOfLoadedItems(prevState => prevState + 5)}}>
                        Mehr Anzeigen
                    </ButtonBordered>
                </div>
            </Section>
        </React.Fragment>
    )
} 

export default ImmobilienPage