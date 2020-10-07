import React, {useEffect, useState} from 'react'
import {SwiperSlide} from 'swiper/react'
import {Link} from 'gatsby'

import styles from './referenzen.module.scss'
import Slider from '../../components/Slider'

import imgSlide1 from '../../img/background1.jpg'
import imgSlide2 from '../../img/background2.jpg'
import BackgroundImage from '../../components/BackgroundImage'
import Section from '../../components/Section'
import Reference from '../../components/Reference'
import ButtonBordered from '../../components/ButtonBordered'
import PageIntro from '../../components/PageIntro'
import LinkRibbons from '../../components/LinkRibbons'

const ReferenzenPage = () => {

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

    console.log(scrollFromTop)

    return(
        <React.Fragment>
            <div className={styles.heroSlider}>
                <Slider>
                    <SwiperSlide>
                        <div style={{height: '100vh'}}>
                            <BackgroundImage image={imgSlide1}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{height: '100vh'}}>
                            <BackgroundImage image={imgSlide2}/>
                        </div>
                    </SwiperSlide>
                </Slider>
                <LinkRibbons links={[{href:'/', text:'Dienstleistungen'}, {href:'/', text:'Dienstleistungen'}]}/>
            </div>
            <PageIntro title={'REFERENZEN'}>
                <p>
                Jedes unserer verkauften oder vermie­teten Objekte ist eine Erfolgs­ge­schichte, die uns stolz macht. Eine Auswahl dieser Geschichten möchten wir hier mit Ihnen teilen. Viel Vergnügen beim Entde­cken.
                </p>
            </PageIntro>
            <Section>
                {dummyArray.map((item, index) => {
                    if(index < numOfLoadedItems){
                        return <div className={`${styles.referenceItem} ${styles.visibleItem}`}>
                        <Reference/>
                        </div>
                    }
                })}
                <div className={styles.seeMoreButton}>
                    <ButtonBordered onClick={() => {setScrollPosition();setNumOfLoadedItems(prevState => prevState + 5)}}>
                        Mehr Anzeigen
                    </ButtonBordered>
                </div>
            </Section>
        </React.Fragment>
    )
}

export default ReferenzenPage