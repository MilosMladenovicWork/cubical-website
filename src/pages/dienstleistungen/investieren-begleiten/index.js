import React from 'react'
import {SwiperSlide} from 'swiper/react'
import LinkRibbons from '../../../components/LinkRibbons'

import Slider from '../../../components/Slider'
import styles from './investieren-begleiten.module.scss'
import imgSlide1 from '../../../img/background1.jpg'
import background1 from '../../../img/background1.jpg'
import BackgroundImage from '../../../components/BackgroundImage'
import PageIntro from '../../../components/PageIntro'
import Section from '../../../components/Section'
import TextImageBox from '../../../components/TextImageBox'
import boxImage from '../../../img/text-image-box-image-1.png'
import ButtonBordered from '../../../components/ButtonBordered'
import SelectHeadingContent from '../../../components/SelectHeadingContent'
import OffsetItemContainer from '../../../components/OffsetItemContainer'
import RealEstateItem from '../../../components/RealEstateItem'
import BigImageSection from '../../../components/BigImageSection'

const InvestierenBegleitenPage = () => {
    return(
        <React.Fragment>
            <Slider>
                <SwiperSlide>
                    <div style={{height: '100vh'}}>
                        <BackgroundImage image={imgSlide1}/>
                    </div>
                </SwiperSlide>
                <LinkRibbons links={[{href:'/dienstleistungen/vermieten/', text: 'Vermieten'}, {href: '/dienstleistungen/verkaufen/', text:'Verkaufen'}]}/>
            </Slider>
            <PageIntro title='WIR VERKAUFEN IHRE IMMOBILIE.'>
                <p>Die Immo­bi­li­en­ver­mark­tung ist unsere Kern­kom­pe­tenz. Doch unser Angebot reicht weit darüber hinaus. Wir haben den Anspruch, Sie ganz­heit­lich und diskret zu beraten und unter­stützen. Zu unter­schied­lichsten Themen aus der Welt der Immo­bi­lien und mit viel­fäl­tigen Dienst­leis­tungen.</p>
            </PageIntro>
            {/* <Section>
                <h3><span className={styles.bigNumber}>1</span> UNVERBINDLICHES ERSTGESPRÄCH</h3>
                <p>Wir treffen Sie direkt vor Ort zum unver­bind­li­chen Gespräch. So entwi­ckeln wir das beste Gefühl für Sie und Ihre Immo­bilie, können alle rele­vanten Fragen klären und ein passendes Vorgehen erar­beiten.</p>
            </Section> */}
            <Section>
                <TextImageBox image={boxImage}>
                    <h3>UNVERBINDLICHES ERSTGESPRÄCH</h3>
                    <p>In Zusam­men­ar­beit mit renom­mierten Part­nern – Versi­che­rungen, Banken und weiteren Finan­z­in­sti­tuten – schätzen wir Ihre Immo­bilie und evalu­ieren den besten Preis unter Berück­sich­ti­gung der lokalen Situa­tion. So garan­tieren wir eine markt­ge­rechte Preis­emp­feh­lung.</p>
                </TextImageBox>
            </Section>
            <Section>
                <h3>UNVERBINDLICHES ERSTGESPRÄCH</h3>
                <p>Wir treffen Sie direkt vor Ort zum unver­bind­li­chen Gespräch. So entwi­ckeln wir das beste Gefühl für Sie und Ihre Immo­bilie, können alle rele­vanten Fragen klären und ein passendes Vorgehen erar­beiten.</p>
            </Section>
            <BigImageSection image={background1}>
                <h3>
                    JEDES HAUS EINE HERZENSANGELEGENHEIT.
                </h3>
                <LinkRibbons links={[{href:'/immobilien/', text: 'Unsere Immobilien'}]}/>
            </BigImageSection>
            <Section>
                <h2>AKTUELLES</h2>
                <OffsetItemContainer>
                    <RealEstateItem>
                    </RealEstateItem>
                    <RealEstateItem>
                    </RealEstateItem>
                    <RealEstateItem>
                    </RealEstateItem>
                </OffsetItemContainer>
            </Section>
        </React.Fragment>
    )
}

export default InvestierenBegleitenPage