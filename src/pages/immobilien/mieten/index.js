import React, {useState, useEffect}  from 'react'
import {SwiperSlide} from 'swiper/react'

import Slider from '../../../components/Slider'
import styles from './mieten.module.scss'
import imgSlide1 from '../../../img/mieten-banner.png'
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

const MietenPage = () => {

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
            <PageIntro title='Lust auf eine neue Perspektive? Wir vermieten auch.'>
                <p>Eine Wohnung ist ein Rückzugsort und da muss alles zusammenpassen - Nachbarn, Umfeld, Lage. Wir schauen uns mit Ihnen zusammen unsere neuen Liegenschaften an. </p>
                <p>Beim Ausbau unserer Wohnungen ist uns sowohl die Qualität der Ausstattung als auch die Aufteilung der Wohnung wichtig gewesen, um ein Maximum an Wohlfühlfaktor zu gewährleisten.</p>
            </PageIntro>
            <Section>
                <h2>KAUFEN</h2>
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
            </Section>
            <Section>
                <h3><span className={styles.bigNumber}>1</span> UNVERBINDLICHES ERSTGESPRÄCH</h3>
                <p>Wir treffen Sie direkt vor Ort zum unver­bind­li­chen Gespräch. So entwi­ckeln wir das beste Gefühl für Sie und Ihre Immo­bilie, können alle rele­vanten Fragen klären und ein passendes Vorgehen erar­beiten.</p>
            </Section>
            <Section>
                <TextImageBox image={boxImage}>
                    <h3><span className={styles.bigNumber}>2</span> UNVERBINDLICHES ERSTGESPRÄCH</h3>
                    <p>In Zusam­men­ar­beit mit renom­mierten Part­nern – Versi­che­rungen, Banken und weiteren Finan­z­in­sti­tuten – schätzen wir Ihre Immo­bilie und evalu­ieren den besten Preis unter Berück­sich­ti­gung der lokalen Situa­tion. So garan­tieren wir eine markt­ge­rechte Preis­emp­feh­lung.</p>
                    <ButtonBordered>
                        BEWERTUNG ANFRAGEN
                    </ButtonBordered>
                </TextImageBox>
            </Section>
            <Section>
                <h3><span className={styles.bigNumber}>3</span> UNVERBINDLICHES ERSTGESPRÄCH</h3>
                <p>Wir treffen Sie direkt vor Ort zum unver­bind­li­chen Gespräch. So entwi­ckeln wir das beste Gefühl für Sie und Ihre Immo­bilie, können alle rele­vanten Fragen klären und ein passendes Vorgehen erar­beiten.</p>
                <SelectHeadingContent/>
            </Section>
            <Section>
                <TextImageBox image={boxImage}>
                    <h3><span className={styles.bigNumber}>4</span> UNVERBINDLICHES ERSTGESPRÄCH</h3>
                    <p>In Zusam­men­ar­beit mit renom­mierten Part­nern – Versi­che­rungen, Banken und weiteren Finan­z­in­sti­tuten – schätzen wir Ihre Immo­bilie und evalu­ieren den besten Preis unter Berück­sich­ti­gung der lokalen Situa­tion. So garan­tieren wir eine markt­ge­rechte Preis­emp­feh­lung.</p>
                    <SelectHeadingContent column/>
                </TextImageBox>
            </Section>
            <Section>
                <h3><span className={styles.bigNumber}>5</span> UNVERBINDLICHES ERSTGESPRÄCH</h3>
                <p>Wir treffen Sie direkt vor Ort zum unver­bind­li­chen Gespräch. So entwi­ckeln wir das beste Gefühl für Sie und Ihre Immo­bilie, können alle rele­vanten Fragen klären und ein passendes Vorgehen erar­beiten.</p>
            </Section>
            <Section>
                <h3><span className={styles.bigNumber}>6</span> UNVERBINDLICHES ERSTGESPRÄCH</h3>
                <p>Wir treffen Sie direkt vor Ort zum unver­bind­li­chen Gespräch. So entwi­ckeln wir das beste Gefühl für Sie und Ihre Immo­bilie, können alle rele­vanten Fragen klären und ein passendes Vorgehen erar­beiten.</p>
                <SelectHeadingContent/>
            </Section>
            <PageIntro title='DER PASSENDE INVESTOR FÜR IHR RENDITEOBJEKT.'>
                <p>Sind Sie auf der Suche nach einem geeig­neten Investor für Ihre Anla­ge­im­mo­bilie? Dabei können wir Sie ganz gezielt unter­stützen. Denn für grosse Immo­bi­lie­nin­ves­toren im In- und Ausland suchen wir laufend nach exklu­siven Rendi­te­ob­jekten: Wohnim­mo­bi­lien, Mehr­fa­mi­li­en­häuser oder attrak­tive Grund­stücke. Holen Sie uns ins Boot – wir stehen Ihnen gerne zur Seite.</p>
            </PageIntro>
            {/* <Section>
                <h2>AKTUELLES</h2>
                <OffsetItemContainer>
                    <RealEstateItem 
                        link='/immobilien-entry'
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                    <RealEstateItem 
                        link='/immobilien-entry'
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                    <RealEstateItem 
                        link='/immobilien-entry'
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                </OffsetItemContainer>
            </Section> */}
        </React.Fragment>
    )
}

export default MietenPage