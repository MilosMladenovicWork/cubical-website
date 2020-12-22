import React, {useState, useEffect}  from 'react'
import {SwiperSlide} from 'swiper/react'
import LinkRibbons from '../../../components/LinkRibbons'

import Slider from '../../../components/Slider'
import styles from './kaufen.module.scss'
import imgSlide1 from '../../../img/kaufen-banner.png'
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
import MotoText from '../../../components/MotoText'
import FilterPropertySection from '../../../components/FilterPropertySection'

const KaufenPage = () => {

    return(
        <React.Fragment>
            <Slider>
                <SwiperSlide>
                    <div style={{height: '100vh'}}>
                        <BackgroundImage image={imgSlide1}/>
                    </div>
                </SwiperSlide>
            </Slider>
            <MotoText text={'Ein Haus ist mehr alsnur ein Gebäude ....'}/>
            <ScrollScreenButton>
                <img src={downArrowImg} alt='scroll down'/>
            </ScrollScreenButton>
            <PageIntro title='Es ist die Möglichkeit seine eigene Kunst zu leben.'>
                <p>Wer besitzt, der bestimmt: Ob farbige Wände, Blumenbeet im Garten oder ein neues Badezimmer. Als Eigentümer eines Hauses oder einer Wohnung, sind Sie freigestellt, ihr Haus nach ihren Wünschen zu gestalten. </p>
                <p>Der Kauf eines Hauses wird einer der wichtigsten Entscheidungen, die Sie treffen. Wir freuen uns Sie dabei zu unterstützen und Ihnen zur Seite zu stehen.</p>
            </PageIntro>
            <FilterPropertySection/>
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

export default KaufenPage