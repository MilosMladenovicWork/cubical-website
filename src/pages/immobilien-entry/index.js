import React, {useState} from 'react'
import {SwiperSlide} from 'swiper/react'

import styles from './immobilien-entry.module.scss'
import Section from '../../components/Section'
import MarginContainer from '../../components/MarginContainer'
import RoofSVG from '../../components/RoofSVG'
import Slider from '../../components/Slider'

import realEstate1 from '../../img/real-estate-1.png'
import realEstate2 from '../../img/real-estate-2.png'
import realEstate3 from '../../img/real-estate-3.png'
import SliderController from '../../components/SliderController'
import Map from '../../components/Map'
import SeeMoreContainer from '../../components/SeeMoreContainer'
import ItemAppearOverlay from '../../components/ItemAppearOverlay'
import AppearOnViewContainer from '../../components/AppearOnViewContainer'

const ImmobilienEntry = () => {

    const [swiper, setSwiper] = useState()
    const [activeSlide, setActiveSlide] = useState()

    return(
        <React.Fragment>
            <MarginContainer/>
            <Section>
                <AppearOnViewContainer>
                    <h1 className={styles.propertyTitle}>FÜR GROSS UND KLEIN, SCHÖNE UND BARRIEREFREIE WOHNOASE IM GRÜNEN</h1>
                </AppearOnViewContainer>
                <div className={styles.rowBorderLayout}>
                    <AppearOnViewContainer>
                        <div>
                            <h5><RoofSVG/> AUF EINEN BLICK</h5>
                            <div className={styles.infoList}>
                                <span>Preis:</span>
                                <span>CHF 500'000</span>
                                <br/>
                                <span>Kategorie:</span>
                                <span>Wohnung</span>
                                <br/>
                                <span>Anzahl Zimmer:</span>
                                <span>4,5</span>
                                <br/>
                                <span>Wohnfläche:</span>
                                <span>106m<sup>2</sup></span>
                                <br/>
                                <span>Baujahr:</span>
                                <span>1994</span>
                                <br/>
                                <span>Verfügbar:</span>
                                <span>Nach Absprache</span>
                                <br/>
                            </div>
                        </div>
                    </AppearOnViewContainer>
                    <AppearOnViewContainer>
                        <div>
                            <h5><RoofSVG/> ANGABEN</h5>
                            <div className={styles.infoList}> 
                                <span>PLZ/Ort:</span>
                                <span>5316 Leuggern</span>
                                <br/> 
                                <span>Strasse:</span>
                                <span>Reginaweg 10</span>
                                <br/> 
                                <span>Renoviert:</span>
                                <span>2019</span>
                                <br/> 
                                <span>Lift:</span>
                                <span>Ja</span>
                                <br/> 
                                <span>Rollstuhlgängig:</span>
                                <span>Ja</span>
                                <br/> 
                            </div>
                        </div>
                    </AppearOnViewContainer>
                </div>
                <AppearOnViewContainer>
                    <Slider setSwiper={setSwiper} setActiveSlide={setActiveSlide}>
                        <SwiperSlide>
                            <img src={realEstate1} alt=''/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={realEstate2} alt=''/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={realEstate3} alt=''/>
                        </SwiperSlide>
                    </Slider>
                </AppearOnViewContainer>
                <AppearOnViewContainer>
                    <SliderController swiper={swiper} numberOfSlides={3} activeSlide={activeSlide}/>
                </AppearOnViewContainer>
                <AppearOnViewContainer>
                    <SeeMoreContainer>
                        <div className={styles.content}>
                            <h5><RoofSVG/> BESCHREIBUNG</h5>
                            <p>Dieses Zuhause mit gutem Preis-Leistungs-Verhältnis empfängt Jung und Alt auf behagliche, einfache und unkomplizierte Art und Weise - treten Sie ein!</p>
                            <p>Sie leben hier barrierefrei und an äusserst ruhiger Lage. Das Quartier ist sehr gepflegt, man kennt sich hier, weiss aber auch die nötige Privatsphäre zu wahren. Aber lassen Sie uns erst einmal die gute Stube betreten: Das Wohn- und Esszimmer überzeugt mit seiner hellen Atmosphäre und dem praktischen, pflegeleichten Plattenboden. Die geräumige Küche ist dank der neuen Geräte in sehr gutem Zustand; das angrenzende Reduit bietet viel Platz und beherbergt die Waschmaschine und den Tumbler.</p>
                            <p>In den Schlafzimmern wurde schönes Parkett verlegt, das den Räumen eine gemütliche Atmosphäre verleiht. Weiter finden Sie zwei Nasszellen: eine ist mit Badewanne ausgestattet, die andere verfügt über eine begehbare Dusche. Letztere wurde zudem 2019 komplett saniert.</p>
                            <p>Für genügend Platz und eine aufgeräumte Atmosphäre sorgen die Einbauschränke sowie der geräumige Keller mit Fenster. Weitere Räume zur gemeinsamen Nutzung stehen zur Verfügung, und zwar: Veloraum, Kinderwagenraum und Trocknungsraum. Apropos «Gemeinschaftsnutzung»: Allen Bewohnern steht das Aussencheminée zur Verfügung. Ein Garagenplatz in der Einstellhalle kann erworben werden. Auch können weitere Aussenparkplätze gemietet werden.</p>
                            <p>Das erwartet Sie ausserdem:</p>
                            <ul>
                                <li>Gepflegte Wohnung</li>
                                <li>Ruhige Lage</li>
                                <li>Helles Wohn- und Esszimmer mit Plattenboden</li>
                                <li>Geräumige Küche mit grossem Reduit inkl. Waschmaschine und Tumbler</li>
                            </ul>
                            <p>Nutzen Sie die Gelegenheit und vereinbaren Sie einen Besichtigungstermin, um sich selbst davon zu überzeugen! Gerne erwarten wir Ihren Anruf.</p>
                        </div>
                    </SeeMoreContainer>
                </AppearOnViewContainer>
            </Section>
            <Section>
                <div className={styles.rowBorderLayout}>
                    <AppearOnViewContainer>
                        <div>
                            <h5><RoofSVG/> BESICHTIGUNG</h5>
                            <p>Patrick Angioy +41 76 801 69 50</p>
                        </div>
                    </AppearOnViewContainer>
                    <div>
                        <div className={styles.box}>
                            <ItemAppearOverlay text='Check­liste Gewerbe-objekt Vermieten' linkToSee='/' linkToDownload='/'/>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <h5><RoofSVG/> LAGE</h5>
                <AppearOnViewContainer>
                    <div className={styles.mapContainer}>
                        <Map coords={[47.195602, 6.148113]} zoom={17}/>
                    </div>
                </AppearOnViewContainer>
            </Section>
        </React.Fragment>
    )
}

export default ImmobilienEntry