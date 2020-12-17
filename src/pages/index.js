import React from 'react'
import {SwiperSlide} from 'swiper/react'
import {Link} from 'gatsby'

import styles from './index.module.scss'
import Slider from '../components/Slider'

import imgSlide1 from '../img/home-page.png'
import background3 from '../img/background3.png'
import background4 from '../img/dienstleistungen.png'
import BackgroundImage from '../components/BackgroundImage'
import Section from '../components/Section'
import Reference from '../components/Reference'
import ButtonBordered from '../components/ButtonBordered'
import PageIntro from '../components/PageIntro'
import BigImageSection from '../components/BigImageSection'
import LinkRibbons from '../components/LinkRibbons'
import ImageInfoItem from '../components/ImageInfoItem'
import RandomWidthItem from '../components/RandomWidthItem'
import RealEstateItem from '../components/SlidingOverlayItem'
import OffsetItemContainer from '../components/OffsetItemContainer'
import ScrollScreenButton from '../components/ScrollScreenButton'
import downArrowImg from '../img/chevron-down-outline.svg'
import Map from '../components/Map'
import realEstateItemImage from '../img/itemImage1.png'
import popularSectionImg from '../img/popular-section1.png'
import referenceImg from '../img/background1.jpg'
import AppearOnViewContainer from '../components/AppearOnViewContainer'
import TiltableContainer from '../components/TiltableContainer'

const HomePage = () => {
    return(
        <React.Fragment>
            <div className={styles.heroSlider}>
                <Slider>
                    <SwiperSlide>
                        <div style={{height: '100vh'}}>
                            <BackgroundImage image={imgSlide1}/>
                        </div>
                    </SwiperSlide>
                </Slider>
                <div className={styles.motoTextContainer}>
                    <TiltableContainer roundedCorners>
                        <h1 className={styles.motoText}><span>T</span><span>h</span><span>e</span> <span>k</span><span>e</span><span>y</span> <span>t</span><span>o</span> <span>y</span><span>o</span><span>u</span><span>r</span> <span>h</span><span>o</span><span>m</span><span>e</span><span>.</span></h1>
                    </TiltableContainer>
                </div>
                <LinkRibbons links={[{href:'/aktuelles', text:'Aktuelles'}]}/>
                <ScrollScreenButton>
                    <img src={downArrowImg} alt='scroll down'/>
                </ScrollScreenButton>
            </div>
            <PageIntro title={'Ein Haus sollte mehr sein, als nur eine Immobilie.'}>
                <p>
                    Es ist ein Zuhause, eine Wohfühl Oase, ein Ort, an dem man sich ausruhen kann, um eventuell auch Zeit mit der Familie zu verbringen.
                </p>
                <p>
                    Deswegen bauen wir das Haus genau nach Ihren Bedürfnissen. Wir schauen, dass es für Sie als Kunden wahrscheinlich ist, dass es das erste und das letzte Haus sein wird, welches gebaut wird – da ist es umso wichtiger, dass alles zu 100% passt. Aus diesem Grund arbeiten wir mit einem mit Hochdruck zusammenarbeitendem Team, welches Ihre Wünsche und Träume verwirklichen wird.
                </p>
                <p>
                    Lassen Sie sich von unserer individuellen Beratung begeistern und Ihre Träume wahrwerden.
                </p>
            </PageIntro>
            <Section>
                <ul className={styles.popularSectionsContainer}>
                    <ImageInfoItem link='/dienstleistungen/verkaufen/' image={popularSectionImg} title={'Step by Step erfolg­reich verkauft'} heading={'IMMOBILIENVERKAUF'}>
                        <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
                    </ImageInfoItem>
                    <ImageInfoItem link='/dienstleistungen/verkaufen/' image={popularSectionImg} title={'Step by Step erfolg­reich verkauft'} heading={'IMMOBILIENVERKAUF'}>
                        <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
                    </ImageInfoItem>
                    <ImageInfoItem link='/dienstleistungen/verkaufen/' image={popularSectionImg} title={'Step by Step erfolg­reich verkauft'} heading={'IMMOBILIENVERKAUF'}>
                        <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
                    </ImageInfoItem>
                    <ImageInfoItem link='/dienstleistungen/verkaufen/' image={popularSectionImg} title={'Step by Step erfolg­reich verkauft'} heading={'IMMOBILIENVERKAUF'}>
                        <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
                    </ImageInfoItem>
                    <ImageInfoItem link='/dienstleistungen/verkaufen/' image={popularSectionImg} title={'Step by Step erfolg­reich verkauft'} heading={'IMMOBILIENVERKAUF'}>
                        <p>Wir freuen uns, Sie auf dem Weg zur erfolg­reich verkauften Immo­bilie zu begleiten – mit umfas­senden Dienst­leis­tungen vom ersten Kennen­lernen bis zur Umzugs­pla­nung.</p>
                    </ImageInfoItem>
                </ul>
            </Section>
            <BigImageSection image={background4}>
                <h2>DIENSTLEISTUNGEN</h2>
                <ul className={styles.ourServicesContainer}>
                    <RandomWidthItem link='/dienstleistungen/verkaufen/'>
                        <h3>Verkauf von Immobilien</h3>
                        <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
                    </RandomWidthItem>
                    <RandomWidthItem link='/dienstleistungen/verkaufen/'>
                        <h3>Verkauf von Immobilien</h3>
                        <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
                    </RandomWidthItem>
                    <RandomWidthItem link='/dienstleistungen/verkaufen/'>
                        <h3>Verkauf von Immobilien</h3>
                        <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
                    </RandomWidthItem>
                    <RandomWidthItem link='/dienstleistungen/verkaufen/'>
                        <h3>Verkauf von Immobilien</h3>
                        <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
                    </RandomWidthItem>
                    <RandomWidthItem link='/dienstleistungen/verkaufen/'>
                        <h3>Verkauf von Immobilien</h3>
                        <p>Wir wissen, wie man Ihre Immobilie ins beste Licht rückt und wickeln den kompletten Verkaufsprozess für Sie ab – inklusive individuell abgestimmter, kreativer Vermarktungsmassnahmen.</p>
                    </RandomWidthItem>
                </ul>
            </BigImageSection>
            {/* <Section>
                <h2>AKTUELLE IMMOBILIEN</h2>
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
                        title={'Für Gross und Klein, schöne und barrierefreie Wohnoase im Grünen'}
                        image={realEstateItemImage}
                        heading={'Leuggern'}
                    >
                        <span>4,5 Zimmer</span>
                        <span>CHF 500'000</span>
                        <span>5316 Leuggern</span>
                    </RealEstateItem>
                    <RealEstateItem 
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
            <BigImageSection image={background3} title={'IMMOBILIEN SIND VOLLER TRÄUME. LASSEN WIR SIE WAHR WERDEN.'}>
                <LinkRibbons links={[{href:'/', text:'Dienstleistungen'}, {href:'/', text:'Dienstleistungen'}]}/>
            </BigImageSection>
            <Section>
                <h2>REFERENZEN</h2>
                <Reference videoLink={'https://www.youtube.com/embed/ZK9wtYOcChQ'} image={referenceImg} quote={'Es gibt nur eine – und das ist Cristina Cotoia.'}/>
                <Reference videoLink={'https://www.youtube.com/embed/ZK9wtYOcChQ'} image={referenceImg} quote={'Es gibt nur eine – und das ist Cristina Cotoia.'}/>
                <div class={styles.referenceButtonContainer}>
                    <ButtonBordered>
                        <Link to='/referenzen'>
                            Zu allen Referenzen
                        </Link>
                    </ButtonBordered>
                </div>
            </Section>
            <section>
                <AppearOnViewContainer>
                    <div className={styles.mapContainer}>
                        <Map coords={[46.195602, 6.148113]} zoom={15}/>
                    </div>
                </AppearOnViewContainer>
            </section> */}
        </React.Fragment>
    )
}

export default HomePage