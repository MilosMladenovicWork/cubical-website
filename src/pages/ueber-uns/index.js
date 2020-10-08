import React from 'react'
import {SwiperSlide} from 'swiper/react'
import {Link} from 'gatsby'

import styles from './ueber-uns.module.scss'
import Slider from '../../components/Slider'
import imgSlide1 from '../../img/background1.jpg'
import imgSlide2 from '../../img/background2.jpg'
import BackgroundImage from '../../components/BackgroundImage'
import Section from '../../components/Section'
import TextImageBox from '../../components/TextImageBox'
import OffsetItemContainer from '../../components/OffsetItemContainer'
import RealEstateItem from '../../components/RealEstateItem'
import openIcon from '../../img/arrow-forward.svg'
import Reference from '../../components/Reference'
import ButtonBordered from '../../components/ButtonBordered'

const UeberUnsPage = () => {
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
            </div>
            <Section>
                <h1>VIER WÄNDE – EIN PARTNER</h1>
                <p>Für uns spre­chen viele Gründe. Aber was zählt, sind allein Sie, Ihre Immo­bilie und Ihr Vertrauen in uns. Anstatt auf Quan­tität setzen wir auf Qualität, damit wir jedem Objekt die Aufmerk­sam­keit schenken können, die es verdient. Eine klare Kommu­ni­ka­tion, Trans­pa­renz und direkte Wege liegen uns sehr am Herzen. Nur so können wir flexibel und ganz gezielt reagieren – auf Ihre Wünsche und Bedürf­nisse indi­vi­duell eingehen. Wir sind optimal vernetzt und begleiten Sie auf dem Weg zum erfolg­rei­chen Immo­bi­li­en­ver­kauf, und zwar mit starken Part­nern, viel Gespür für den Markt und einer Menge Leiden­schaft. Lernen Sie uns persön­lich kennen. Wir freuen uns auf Sie.</p>
            </Section>
            <Section>
                <TextImageBox>
                    <h3>ANSPRUCHS­VOLL UND PERSÖN­LICH</h3>
                    <p>«Ich liebe Immo­bi­lien – und ich liebe Heraus­for­de­rungen. Mit dem Anspruch, in jedem Detail auf Klasse statt Masse zu setzen und meinen Anfor­de­rungen treu zu bleiben, grün­dete ich die Nobil Group AG, zu der auch die Nobil Immo GmbH und Nobil Invest AG gehören. Seitdem haben wir uns stetig weiter­ent­wi­ckelt und sind zum starken Team von Experten ange­wachsen. Heute sind wir in weiten Teilen der Schweiz erfolg­reich und mit mehreren Stand­orten nahe am Geschehen. Mein Antrieb alle Kunden­be­zie­hungen als vertrau­ens­volle Part­ner­schaften zu verstehen und ein offenes Auge für die Indi­vi­dua­lität jeder Immo­bilie zu haben, ist seit der ersten Stunde unver­än­dert.
Das macht uns zum besten Partner für ihre vier Wände.» </p>
                    <p>Ihre Cris­tina Cotoia, Geschäfts­füh­rerin/Inha­berin </p>
                </TextImageBox>
            </Section>
            <Section>
                <h2>WIR ZEIGEN PERSÖNLICHKEIT</h2>
                <OffsetItemContainer>
                    <RealEstateItem>
                        <img src={openIcon} alt='' className={styles.showOffIcon}/>
                    </RealEstateItem>
                    <RealEstateItem>
                        <img src={openIcon} alt='' className={styles.showOffIcon}/>
                    </RealEstateItem>
                    <RealEstateItem>
                        <img src={openIcon} alt='' className={styles.showOffIcon}/>
                    </RealEstateItem>
                    <RealEstateItem>
                        <img src={openIcon} alt='' className={styles.showOffIcon}/>
                    </RealEstateItem>
                </OffsetItemContainer>
            </Section>
            <Section>
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

export default UeberUnsPage