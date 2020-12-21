import React, {useState, useEffect}  from 'react'
import {SwiperSlide} from 'swiper/react'

import Slider from '../../../components/Slider'
import styles from './finanzierungsberatung.module.scss'
import imgSlide1 from '../../../img/finanzier-banner.png'
import BackgroundImage from '../../../components/BackgroundImage'
import PageIntro from '../../../components/PageIntro'
import Section from '../../../components/Section'
import TextImageBox from '../../../components/TextImageBox'
import boxImage from '../../../img/text-image-box-image-1.png'
import ButtonBordered from '../../../components/ButtonBordered'
import SelectHeadingContent from '../../../components/SelectHeadingContent'
import OffsetItemContainer from '../../../components/OffsetItemContainer'
import RealEstateItem from '../../../components/SlidingOverlayItem'
import downArrowImg from '../../../img/chevron-down-outline.svg'
import ScrollScreenButton from '../../../components/ScrollScreenButton'
import realEstateItemImage from '../../../img/itemImage1.png'
import BottomBorderedContainer from '../../../components/BottomBorderedContainer'
import SpacedItemsContainer from '../../../components/SpacedItemsContainer'
import property from '../../../img/property.png'
import MotoText from '../../../components/MotoText'
import Reference from '../../../components/Reference'
import referenceImg from '../../../img/background1.jpg'

const FinanzierungsberatungPage = () => {

    const [numOfLoadedItems, setNumOfLoadedItems] = useState(1)
    const [scrollFromTop, setScrollFromTop] = useState(0)

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
        <React.Fragment>
            <Slider>
                <SwiperSlide>
                    <div style={{height: '100vh'}}>
                        <BackgroundImage image={imgSlide1}/>
                    </div>
                </SwiperSlide>
            </Slider>
            <ScrollScreenButton>
                <img src={downArrowImg} alt='scroll down'/>
            </ScrollScreenButton>
            <PageIntro title='Finanzierungsberatung.'>
                <p>Jedes unserer verkauften oder vermie­teten Objekte ist eine Erfolgs­ge­schichte, die uns stolz macht. Eine Auswahl dieser Geschichten möchten wir hier mit Ihnen teilen. Viel Vergnügen beim Entde­cken.</p>
            </PageIntro>
            <Section>
                {dummyArray.map((item, index) => {
                    if(index < numOfLoadedItems){
                        return <div className={`${styles.referenceItem} ${styles.visibleItem}`}>
                        <Reference videoLink={'https://www.youtube.com/embed/ZK9wtYOcChQ'} image={referenceImg} quote={'Es gibt nur eine – und das ist Cristina Cotoia.'} text={
                            <>
                                <p>Es ist ein Zuhause, eine Wohfühl Oase, ein Ort, an dem man sich ausruhen kann, um eventuell auch Zeit mit der Familie zu verbringen.</p>
                                <p>Deswegen bauen wir das Haus genau nach Ihren Bedürfnissen. Wir schauen, dass es für Sie als Kunden wahrscheinlich ist, dass es das erste und das letzte Haus sein wird, welches gebaut wird – da ist es umso wichtiger, dass alles zu 100% passt. Aus diesem Grund arbeiten wir mit einem mit Hochdruck zusammenarbeitendem Team, welches Ihre Wünsche und Träume verwirklichen wird.</p>
                                <p>Lassen Sie sich von unserer individuellen Beratung begeistern und Ihre Träume wahrwerden</p>
                            </>
                        }/>
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

export default FinanzierungsberatungPage