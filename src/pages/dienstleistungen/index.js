import React, {useState, useEffect}  from 'react'
import {SwiperSlide} from 'swiper/react'

import Slider from '../../components/Slider'
import styles from './dienstleistungen.module.scss'
import imgSlide1 from '../../img/dient-banner.png'
import BackgroundImage from '../../components/BackgroundImage'
import PageIntro from '../../components/PageIntro'
import Section from '../../components/Section'
import TextImageBox from '../../components/TextImageBox'
import boxImage from '../../img/text-image-box-image-1.png'
import ButtonBordered from '../../components/ButtonBordered'
import SelectHeadingContent from '../../components/SelectHeadingContent'
import OffsetItemContainer from '../../components/OffsetItemContainer'
import RealEstateItem from '../../components/SlidingOverlayItem'
import downArrowImg from '../../img/chevron-down-outline.svg'
import ScrollScreenButton from '../../components/ScrollScreenButton'
import realEstateItemImage from '../../img/itemImage1.png'
import BottomBorderedContainer from '../../components/BottomBorderedContainer'
import SpacedItemsContainer from '../../components/SpacedItemsContainer'
import property from '../../img/property.png'
import MotoText from '../../components/MotoText'

const DienstleistungenPage = () => {

    const [numOfLoadedItems, setNumOfLoadedItems] = useState(2)
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
            <PageIntro title='Unsere Dienstleistungen.'>
                <p>Sie haben sich entschieden, Ihre Immo­bilie in neue Hände zu geben. Klar, möchten Sie es zum best­mög­li­chen Preis verkaufen – und das möglichst zeitnah und reibungslos. Wir wissen, wie Sie dieses Ziel errei­chen. Am besten mit einem Profi wie uns, der Sie Step by Step begleitet.</p>
                <p>Wir sind Mitglied der Schwei­­ze­ri­­schen Makler­­kammer (SMK) und verpflichten uns zu höchster Qualität und Leis­tung.</p>
            </PageIntro>
            <PageIntro title='DER PASSENDE INVESTOR FÜR IHR RENDITEOBJEKT.'>
                <p>Sind Sie auf der Suche nach einem geeig­neten Investor für Ihre Anla­ge­im­mo­bilie? Dabei können wir Sie ganz gezielt unter­stützen. Denn für grosse Immo­bi­lie­nin­ves­toren im In- und Ausland suchen wir laufend nach exklu­siven Rendi­te­ob­jekten: Wohnim­mo­bi­lien, Mehr­fa­mi­li­en­häuser oder attrak­tive Grund­stücke. Holen Sie uns ins Boot – wir stehen Ihnen gerne zur Seite.</p>
            </PageIntro>
        </React.Fragment>
    )
}

export default DienstleistungenPage