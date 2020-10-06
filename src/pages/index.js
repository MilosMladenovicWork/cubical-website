import React from 'react'
import {SwiperSlide} from 'swiper/react'
import {Link} from 'gatsby'

import styles from './index.module.scss'
import Slider from '../components/Slider'

import imgSlide1 from '../img/background1.jpg'
import imgSlide2 from '../img/background2.jpg'
import background3 from '../img/background3.png'
import background4 from '../img/background4.png'
import BackgroundImage from '../components/BackgroundImage'
import Section from '../components/Section'
import Reference from '../components/Reference'
import ButtonBordered from '../components/ButtonBordered'
import PageIntro from '../components/PageIntro'
import BigImageSection from '../components/BigImageSection'
import LinkRibbons from '../components/LinkRibbons'
import PopularSectionItem from '../components/PopularSectionItem'
import OurServicesItem from '../components/OurServicesItem'

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
                    <SwiperSlide>
                        <div style={{height: '100vh'}}>
                            <BackgroundImage image={imgSlide2}/>
                        </div>
                    </SwiperSlide>
                </Slider>
            <LinkRibbons links={[{href:'/', text:'Dienstleistungen'}, {href:'/', text:'Dienstleistungen'}]}/>
            </div>
            <PageIntro title={'JEDE IMMO­BILIE HAT EINE GESCHICHTE'}>
                <p>
                    Der Verkauf einer Immo­bilie ist weit mehr als ein ratio­naler Handel: Hier kommen Geschichten, Erin­ne­rungen und auch Emotionen ins Spiel. Wir gehen jeweils indi­vi­duell auf unsere Kunden und ihre Immo­bi­lien ein, deshalb sind Sie bei uns richtig. Wir verlieren keine Zeit, enga­gieren uns für Ihren Erfolg und behan­deln Ihr Objekt so, als wäre es unser eigenes. Das heisst: Wir kennen jedes Objekt, jeden Eigen­tümer und seine Bedürf­nisse persön­lich. Gemeinsam mit etablierten Part­nern entwi­ckeln wir eine indi­vi­du­elle Vermark­tungs­stra­tegie mit mass­ge­schnei­derten Lösungen – und verkaufen Ihre Immo­bilie profes­sio­nell, kompe­tent und zum besten Preis. Ob Foto­grafie, Verkauf oder Vermark­tung: Unser Team besteht aus erfah­renen Fach­s­pe­zia­listen und garan­tiert Ihnen heraus­ra­gende Qualität. Sie sind für uns nicht nur eine Nummer – Sie sind für uns der Mittel­punkt des Gesche­hens.
                </p>
                <p>
                    Wir sind Mitglied der Schwei­ze­ri­schen Makler­kammer (SMK) und verpflichten uns zu höchster Qualität und Leis­tung.
                </p>
            </PageIntro>
            <Section>
                <ul className={styles.popularSectionsContainer}>
                    <PopularSectionItem/>
                    <PopularSectionItem/>
                    <PopularSectionItem/>
                    <PopularSectionItem/>
                    <PopularSectionItem/>
                </ul>
            </Section>
            <BigImageSection image={background4}>
                <h2 style={{alignSelf:'left'}}>UNSERE DIENSTLEISTUNGEN</h2>
                <ul className={styles.ourServicesContainer}>
                    <OurServicesItem/>
                    <OurServicesItem/>
                    <OurServicesItem/>
                    <OurServicesItem/>
                    <OurServicesItem/>
                </ul>
            </BigImageSection>
            <BigImageSection image={background3} title={'IMMOBILIEN SIND VOLLER TRÄUME. LASSEN WIR SIE WAHR WERDEN.'}>
                <LinkRibbons links={[{href:'/', text:'Dienstleistungen'}, {href:'/', text:'Dienstleistungen'}]}/>
            </BigImageSection>
            <Section>
                <h2>REFERENZEN</h2>
                <Reference/>
                <div class={styles.referenceButtonContainer}>
                    <ButtonBordered>
                        <Link to='/referenzen'>
                            Zu allen Referenzen
                        </Link>
                    </ButtonBordered>
                </div>
            </Section>
        </React.Fragment>
    )
}

export default HomePage