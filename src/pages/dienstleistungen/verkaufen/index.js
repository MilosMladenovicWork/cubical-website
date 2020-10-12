import React from 'react'
import {SwiperSlide} from 'swiper/react'
import LinkRibbons from '../../../components/LinkRibbons'

import Slider from '../../../components/Slider'
import styles from './verkaufen.module.scss'
import imgSlide1 from '../../../img/background1.jpg'
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

const VerkaufenPage = () => {
    return(
        <React.Fragment>
            <Slider>
                <SwiperSlide>
                    <div style={{height: '100vh'}}>
                        <BackgroundImage image={imgSlide1}/>
                    </div>
                </SwiperSlide>
                <LinkRibbons links={[{href:'/dienstleistungen/vermieten/', text: 'Vermieten'}, {href: '/dienstleistungen/investieren-begleiten/', text:'Investieren & Begleiten'}]}/>
                <ScrollScreenButton>
                    <img src={downArrowImg} alt='scroll down'/>
                </ScrollScreenButton>
            </Slider>
            <PageIntro title='WIR VERKAUFEN IHRE IMMOBILIE.'>
                <p>Sie haben sich entschieden, Ihre Immo­bilie in neue Hände zu geben. Klar, möchten Sie es zum best­mög­li­chen Preis verkaufen – und das möglichst zeitnah und reibungslos. Wir wissen, wie Sie dieses Ziel errei­chen. Am besten mit einem Profi wie uns, der Sie Step by Step begleitet.</p>
                <p>Wir sind Mitglied der Schwei­­ze­ri­­schen Makler­­kammer (SMK) und verpflichten uns zu höchster Qualität und Leis­tung.</p>
            </PageIntro>
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
            <Section>
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
            </Section>
        </React.Fragment>
    )
}

export default VerkaufenPage